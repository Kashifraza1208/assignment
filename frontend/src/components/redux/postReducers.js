import {
  ALL_POST_FAIL,
  ALL_POST_REQUEST,
  ALL_POST_SUCCESS,
} from "./postConstants.js";

export const postsReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case ALL_POST_REQUEST:
      return {
        loading: true,
        posts: [],
      };
    case ALL_POST_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
      };

    case ALL_POST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
