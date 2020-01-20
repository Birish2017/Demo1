import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/action/courseAction";
import * as authorActions from "../../redux/action/authorAction";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseForm from "./CourseForm";
import { newCourse } from "../../mockData";
import "../contact/contact.css";
import { toast } from "react-toastify";

function ManageCoursesPage(props) {
  var TheCourse = props.course;
  const [course, setCourse] = useState(TheCourse);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState({});
  useEffect(() => {
    if (props.courses.length === 0) {
      props.actions.loadCourses().catch(error => {
        //alert("loading failed");
      });
    }

    if (props.authors.length === 0) {
      props.actions.loadAuthors().catch(error => {
        //alert(" failed to load authors" + error);
      });
    }
  }, []);
  function handleChange(e) {
    const { name, value } = e.target;
    setCourse(prevalue => ({
      ...Object.assign({}, prevalue, {
        [name]: name === "authorId" ? parseInt(value, 10) : value
      })
    }));
  }
  function validateForm() {
    const { title, authorId, category } = course;
    const errors = {};
    if (!title) errors.title = "Title is Required";
    if (!authorId) errors.author = "Author is required";
    if (!category) errors.category = "Category  is Required";

    setError(errors);

    return Object.keys(errors).length === 0;
  }
  function handleSubmit(e) {
    e.preventDefault();
    // if (!validateForm()) return;
    setSaving(true);
    if (course.title !== " ") {
      // var course11 = course;
      // course11.id = 11;
      props.actions
        .saveCourse(course)
        .then(() => {
          toast.success("Course saved successfully!");
          props.history.push("/Courses");
        })
        .catch(error => {
          setError({ onSave: error.message });
        });
    }
  }
  return (
    <div className="samplediv">
      <CourseForm
        course={course}
        authors={props.authors}
        errors={error}
        onChange={handleChange}
        onSave={handleSubmit}
        saving={saving}
      />
    </div>
  );
}

ManageCoursesPage.propTypes = {
  course: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.func.isRequired,
  authors: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
};
const mapStateToProps = (state, ownProps) => {
  const slug = ownProps.match.params.slug;
  return {
    course: slug ? state.courses.find(x => x.slug === slug) : newCourse,
    courses: state.courses,
    authors: state.authors
  };
};
const mapDispatchToProps = dispatch => {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      saveCourse: bindActionCreators(courseActions.saveCourse, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursesPage);
