import axios from "axios";

import {
  ALL_POST_FAIL,
  ALL_POST_REQUEST,
  ALL_POST_SUCCESS,
} from "./postConstants";

// Get All POSTs

export const getPost = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_POST_REQUEST });

    const { data } = await axios.get(`/api/v1/post`);
    console.log(data);

    dispatch({
      type: ALL_POST_SUCCESS,
      payload: data.post,
    });
  } catch (error) {
    dispatch({
      type: ALL_POST_FAIL,
      payload: error.response.data.message,
    });
  }
};
