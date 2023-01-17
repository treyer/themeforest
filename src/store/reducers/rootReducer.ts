import { combineReducers } from "redux";
import appReducer from "./appReducer";
import employeeReducer from "./employeeReducer";
import postsReducer from "./postsReducer";

const rootReducer = combineReducers({
  app: appReducer,
  posts: postsReducer,
  employee: employeeReducer,
});

export default rootReducer;
