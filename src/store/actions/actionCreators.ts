import { Theme } from "types/index";
import { SET_THEME } from "./constants";

export const setTheme = (payload: Theme) => ({ type: SET_THEME, payload });
