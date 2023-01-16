import { createSelector } from "reselect";
import { Employee } from "types/index";
import { RootState } from "..";

export const selectTheme = (state: RootState) => state.app.currentTheme;

const selectMaxCountToShow = (state: RootState) =>
  state.employee.maxCountToShow;

const selectFullEmployeeList = (state: RootState) => state.employee.list;

export const selectEmployees = createSelector(
  [selectMaxCountToShow, selectFullEmployeeList],
  (count: number, list: Employee[]): Employee[] =>
    [...list].filter((_el, index) => index < count),
);

export const selectIsLoaderShown = (state: RootState) =>
  state.app.isLoaderShown;

export const selectEmployeesCount = (state: RootState) =>
  state.employee.list.length;
