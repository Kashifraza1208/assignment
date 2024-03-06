import { toast } from "react-hot-toast";
import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  CLEAR_ERRORS,
} from "./userConstants";
import axios from "axios";

const setAuthStatusInLocalStorage = (status) => {
  localStorage.setItem("isAuthenticated", JSON.stringify(status));
};

function handleInputErrors(email, password) {
  if (!email || !password) {
    toast.error("Please fill in all fields");
    return false;
  }

  return true;
}

function handleInputSignupErrors({ username, email, password }) {
  if (!username || !email || !password) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}

// Login

export const login = (email, password) => async (dispatch) => {
  const success = handleInputErrors(email, password);
  if (!success) return;
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `/api/v1/login`,
      { email, password },
      config
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    setAuthStatusInLocalStorage(true);
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

// Register
export const register =
  ({ username, email, password }) =>
  async (dispatch) => {
    const success = handleInputSignupErrors({ username, email, password });
    if (!success) return;
    try {
      dispatch({ type: REGISTER_USER_REQUEST });

      const config = { headers: { "Content-Type": "application/json" } };

      const { data } = await axios.post(
        `/api/v1/signup`,
        { username, email, password },
        config
      );
      console.log(data);

      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
      setAuthStatusInLocalStorage(true);
    } catch (error) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
