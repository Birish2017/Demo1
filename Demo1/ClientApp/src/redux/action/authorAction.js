import * as authorApi from "../../api/authorApi";
import beginApiCall from "./apiStatusActions";

export function loadAuthorsSuccess(authors) {
  return { type: "LOAD_AUTHORS_SUCCESS", authors };
}
export function loadAuthors() {
  return function(dispach) {
    dispach(beginApiCall());
    return authorApi
      .getAuthors()
      .then(authors => {
        dispach(loadAuthorsSuccess(authors));
      })
      .catch(error => {
        throw error;
      });
  };
}
