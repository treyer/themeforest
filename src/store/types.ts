import { Theme } from "types/index";

export interface AppState {
  currentTheme: Theme;
}

export interface AppAction {
  type: string;
  payload?: Theme;
}
