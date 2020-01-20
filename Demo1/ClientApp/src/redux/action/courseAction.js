import * as courseApi from "../../api/courseApi";
import beginApiCall from "./apiStatusActions";

export function loadCourseSuccess(courses) {
  return { type: "LOAD_COURSE_SUCCESS", courses };
}

export function updateCourseSuccess(course) {
  return { type: "UPDATE_COURSE_SUCCESS", course };
}
export function saveCourseSuccess(course) {
  return { type: "SAVE_COURSE_SUCCESS", course };
}
export function deleteCourseSuccess(id) {
  return { type: "DELETE_COURSE_SUCCESS", id };
}
export function loadCourses() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .getCourses()
      .then(courses => {
        dispatch(loadCourseSuccess(courses));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function saveCourse(course) {
  return function(dispatch, getstate) {
    dispatch(beginApiCall());
    return courseApi
      .saveCourse(course)
      .then(savedCourses => {
        console.log(getstate);
        course.id
          ? dispatch(updateCourseSuccess(savedCourses))
          : dispatch(saveCourseSuccess(savedCourses));
      })
      .catch(error => {
        throw error;
      });
  };
}
export function deleteCourse(id) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .deleteCourse(id)
      .then(() => {
        dispatch(deleteCourseSuccess(id));
      })
      .catch(error => {
        throw error;
      });
  };
}
