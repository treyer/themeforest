import { combineReducers } from "redux";
import appReducer from "./appReducer";
import employeeReducer from "./employeeReducer";

const rootReducer = combineReducers({
  app: appReducer,
  employee: employeeReducer,
});

export default rootReducer;
