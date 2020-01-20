import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/action/courseAction";
import * as authorActions from "../../redux/action/authorAction";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
import ConfirmDeleteModal from "../common/ConfirmDeleteModal";

class Courses extends React.Component {
  constructor() {
    super();
    this.state = {
      redirectToAddCourse: false,
      modalIsOpen: false,
      CourseIdToDelete: null
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentDidMount() {
    this.props.actions.loadCourses().catch(error => {
      alert("loading failed" + error.message);
    });
    this.props.actions.loadAuthors().catch(error => {
      alert(" failed to load authors" + error.message);
    });
  }
  handleDelete = () => {
    console.log(this.state);
    const id = this.state.CourseIdToDelete;
    this.props.actions
      .deleteCourse(id)
      .then(res => {
        toast.success("Course Deleted Successfully!");
        this.setState({ modalIsOpen: false });
      })
      .catch(error => {
        alert("unable to delete" + error);
      });
  };

  openModal(id) {
    this.setState({ modalIsOpen: true, CourseIdToDelete: id });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  handleChangeFile(event) {
    event.preventDefault();
    // console.log("handleClick",event);
    var self = this;
    //var apiBaseUrl = axios.defaults.baseURL + "user/upload";
    if (this.state.filesToBeSent.length > 0) {
      var filesArray = this.state.filesToBeSent;
      const reader = new FileReader();
      for (var i in filesArray) {
        //console.log("files",filesArray[i][0]);
        var file = filesArray[i][0];
        //   axios.post(apiBaseUrl, { data: file });
      }
      alert("File upload completed");
    } else {
      alert("Please select files first");
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="courseList">
        {this.state.redirectToAddCourse && <Redirect to="/ManageCoursesPage" />}
        {this.props.loading ? (
          <Spinner />
        ) : (
          <div>
            <h2>Courses</h2>

            <div>
              <input
                type="file"
                onChange={e => this.handleChangeFile(e.target.files[0])}
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={() => {
                this.setState({ redirectToAddCourse: true });
              }}
            >
              Add Course
            </button>
            <CourseList
              courses={this.props.courses}
              authors={this.props.authors}
              onDelete={this.openModal}
            />
            <ConfirmDeleteModal
              modalIsOpen={this.state.modalIsOpen}
              closeModal={this.closeModal}
              onDelete={this.handleDelete}
            />
          </div>
        )}
      </div>
    );
  }
}
Courses.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.func.isRequired,
  authors: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};
const mapStateToProps = state => {
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map(course => {
            return {
              ...Object.assign({}, course, {
                authorName: state.authors.find(a => a.id === course.authorId)
                  .name
              })
            };
          }),
    authors: state.authors,
    loading: state.apiCallProgress > 0
  };
};
const mapDispatchToProps = dispatch => {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
      deleteCourse: bindActionCreators(courseActions.deleteCourse, dispatch)
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Courses);
