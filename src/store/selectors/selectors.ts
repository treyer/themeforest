import { RootState } from "..";

export const selectTheme = (state: RootState) => state.app.currentTheme;
