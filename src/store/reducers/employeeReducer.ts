import {
  INCREASE_EMPLOYEE_COUNT_TO_SHOW,
  RESET_EMPLOYEE_COUNT_TO_SHOW,
} from "store/actions/constants";
import { mockEmployeeList } from "store/mocks";
import { DataAction, EmployeesState } from "../types";

const INIT_EMPLOYEE_COUNT = 9;
const EMPLOYEE_COUNT_INCREASE_STEP = 9;

const initialValue: EmployeesState = {
  list: mockEmployeeList,
  maxCountToShow: INIT_EMPLOYEE_COUNT,
};

const employeeReducer = (
  state: EmployeesState = initialValue,
  { type }: DataAction,
): EmployeesState => {
  switch (type) {
    case RESET_EMPLOYEE_COUNT_TO_SHOW:
      return { ...state, maxCountToShow: INIT_EMPLOYEE_COUNT };
    case INCREASE_EMPLOYEE_COUNT_TO_SHOW:
      return {
        ...state,
        maxCountToShow: state.maxCountToShow + EMPLOYEE_COUNT_INCREASE_STEP,
      };

    default:
      return state;
  }
};

export default employeeReducer;
