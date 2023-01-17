import { Employee, Post, Tag, Theme } from "types/index";

export interface AppState {
  currentTheme: Theme;
  isLoaderShown: boolean;
}

export interface AppAction {
  type: string;
  payload?: Theme;
}

export interface EmployeesState {
  list: Employee[];
  maxCountToShow: number;
}

export interface DataAction {
  type: string;
}

export interface PostsState {
  list: Post[];
  tagList: Tag[];
  activeTag: string;
}
export interface PostsAction {
  type: string;
  payload?: string;
}
