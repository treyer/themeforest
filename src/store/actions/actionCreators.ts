import { Theme } from "types/index";
import {
  HANDLE_INCREASE_EMPLOYEE_COUNT_TO_SHOW,
  HIDE_LOADER,
  INCREASE_EMPLOYEE_COUNT_TO_SHOW,
  RESET_EMPLOYEE_COUNT_TO_SHOW,
  SET_THEME,
  SHOW_LOADER,
} from "./constants";

export const setTheme = (payload: Theme) => ({ type: SET_THEME, payload });

export const resetEmployeeCountToShow = () => ({
  type: RESET_EMPLOYEE_COUNT_TO_SHOW,
});

export const handleIncreaseEmployeeCountToShow = () => ({
  type: HANDLE_INCREASE_EMPLOYEE_COUNT_TO_SHOW,
});

export const increaseEmployeeCountToShow = () => ({
  type: INCREASE_EMPLOYEE_COUNT_TO_SHOW,
});

export const showLoader = () => ({ type: SHOW_LOADER });

export const hideLoader = () => ({ type: HIDE_LOADER });
