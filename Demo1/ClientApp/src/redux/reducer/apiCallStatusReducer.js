import initialState from "./initialState";

export default function apiCallStatusReducer(
  state = initialState.apiCallProgress,
  action
) {
  if (action.type == "BEGIN_API_CALL") {
    return state + 1;
  } else if (actionTypeEndsINSuccess(action.type)) {
    return state - 1;
  }
  return state;
}
function actionTypeEndsINSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}
