import { Theme } from "types/index";
import { SET_THEME } from "../actions/constants";
import { AppAction, AppState } from "../types";

const initialValue: AppState = {
  currentTheme: Theme.Light,
};

const appReducer = (
  state: AppState = initialValue,
  { type, payload }: AppAction,
): AppState => {
  switch (type) {
    case SET_THEME:
      return { ...state, currentTheme: payload || Theme.Light };
    default:
      return state;
  }
};

export default appReducer;
