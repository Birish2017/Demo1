import React, { Component } from "react";
import CourseForm from "./CourseForm";
import { bindActionCreators } from "redux";
import * as courseActions from "../../redux/action/courseAction";
import * as authorActions from "../../redux/action/authorAction";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { connect } from "react-redux";

class CourseAuthorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {
        Title: "Engineering "
      }
    };
  }
  componentDidMount() {
    this.props.actions
      .loadCourses()
      // .then(() => alert("course successfuly loaded"))
      .catch(() => alert("failed to load courses"));
    this.props.actions
      .loadAuthors()
      // .then(() => alert("author successfuly loaded"))
      .catch(() => alert("failed to load author"));
  }

  render() {
    return (
      <CourseForm course={this.state.course} authors={this.props.authors} />
    );
  }
}
CourseAuthorPage.propTypes = {
  actions: PropTypes.func.isRequired,
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired
};

const mapStateToProps = ({ authors, courses }) => ({
  courses,
  authors
});

export function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseAuthorPage);
