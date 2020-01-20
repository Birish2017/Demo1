import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import apiCallProgress from "./apiCallStatusReducer";

const rootReducer = combineReducers({
  courses: courses,
  authors: authors,
  apiCallProgress: apiCallProgress
});

export default rootReducer;
