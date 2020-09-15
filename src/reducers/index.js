import { combineReducers } from "redux";
import ListsReducers from "./ListsReducers";

export default combineReducers({
  listResponse: ListsReducers,
});
