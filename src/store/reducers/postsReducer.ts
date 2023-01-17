import { getTagsFromPosts } from "helpers/getTagsFromPosts";
import { SET_CURRENT_TAG } from "store/actions/constants";
import { mockPosts } from "store/mocks";
import { PostsAction, PostsState } from "../types";

const initialValue: PostsState = {
  list: mockPosts,
  tagList: getTagsFromPosts(mockPosts),
  activeTag: "All topics",
};

const postsReducer = (
  state: PostsState = initialValue,
  { type, payload }: PostsAction,
): PostsState => {
  switch (type) {
    case SET_CURRENT_TAG:
      return { ...state, activeTag: payload || "All topics" };
    default:
      return state;
  }
};

export default postsReducer;
