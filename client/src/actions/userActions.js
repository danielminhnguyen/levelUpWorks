import Axios from "axios";
import { API_URL } from "../config/index.js";
import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
} from "constants/loginConstants";
import history from "history.js";

export const signin = (email, password, role) => async (dispatch) => {
  dispatch({
    type: USER_SIGNIN_REQUEST,
    payload: { email, password, role },
  });
  try {
    const { data } = await Axios.post(API_URL + "api/users/signin", { email, password, role });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    if (role === "teacher") {
      history.push("/dashboard");
    } else {
      history.push("/projects");
    }
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const signout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_SIGNOUT });
  history.push("/");
};

export const register = (firstname, lastname, email, password, role) => async (dispatch) => {
  dispatch({
    type: USER_REGISTER_REQUEST,
    payload: { firstname, lastname, email, password, role },
  });
  console.log("dispatch");
  try {
    const { data } = await Axios.post(API_URL + "api/users/register", {
      firstname,
      lastname,
      email,
      password,
      role,
    });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
  }
};
