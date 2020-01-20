import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "https://localhost:44372/api/Author/";

export function getAuthors() {
  return fetch(baseUrl, { mode: "no-cors" })
    .then(handleResponse)
    .catch(handleError);
}
