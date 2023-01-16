import { Theme } from "types/index";
import { HIDE_LOADER, SET_THEME, SHOW_LOADER } from "../actions/constants";
import { AppAction, AppState } from "../types";

const initialValue: AppState = {
  currentTheme: Theme.Light,
  isLoaderShown: false,
};

const appReducer = (
  state: AppState = initialValue,
  { type, payload }: AppAction,
): AppState => {
  switch (type) {
    case SET_THEME:
      return { ...state, currentTheme: payload || Theme.Light };
    case SHOW_LOADER:
      return { ...state, isLoaderShown: true };
    case HIDE_LOADER:
      return { ...state, isLoaderShown: false };
    default:
      return state;
  }
};

export default appReducer;
