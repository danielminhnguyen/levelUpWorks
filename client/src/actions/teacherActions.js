import Axios from "axios";
import { API_URL } from "../config/index.js";
import {
  TEACHER_HELPREQ_FAIL,
  TEACHER_HELPREQ_REQUEST,
  TEACHER_HELPREQ_SUCCESS,
  TEACHER_MARKHELP_FAIL,
  TEACHER_MARKHELP_REQUEST,
  TEACHER_MARKHELP_SUCCESS,
  TEACHER_MARKSUBMISSION_FAIL,
  TEACHER_MARKSUBMISSION_REQUEST,
  TEACHER_MARKSUBMISSION_SUCCESS,
  TEACHER_PROGRESS_FAIL,
  TEACHER_PROGRESS_REQUEST,
  TEACHER_PROGRESS_SUCCESS,
  TEACHER_STUDENT_PROFILES_FAIL,
  TEACHER_STUDENT_PROFILES_REQUEST,
  TEACHER_STUDENT_PROFILES_SUCCESS,
  TEACHER_SUBMISSION_FAIL,
  TEACHER_SUBMISSION_REQUEST,
  TEACHER_SUBMISSION_SUCCESS,
} from "constants/teacherConstants";

export const teacherProfileReq = (teacherID) => async (dispatch) => {
  dispatch({ type: TEACHER_STUDENT_PROFILES_REQUEST });
  try {
    const { data } = await Axios.post(API_URL + "api/teachers/studentprofile", { teacherID });
    dispatch({ type: TEACHER_STUDENT_PROFILES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TEACHER_STUDENT_PROFILES_FAIL, payload: error.message });
  }
};

export const teacherRequestStudent = (teacherID) => async (dispatch) => {
  dispatch({ type: TEACHER_HELPREQ_REQUEST });
  try {
    const { data } = await Axios.post(API_URL + "api/teachers/helprequest", { teacherID });
    dispatch({ type: TEACHER_HELPREQ_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TEACHER_HELPREQ_FAIL, payload: error.message });
  }
};

export const teacherMarkRequests = (students) => async (dispatch) => {
  dispatch({ type: TEACHER_MARKHELP_REQUEST });
  try {
    const { data } = await Axios.post(API_URL + "api/teachers/markrequest", { students });
    dispatch({ type: TEACHER_MARKHELP_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TEACHER_MARKHELP_FAIL, payload: error.message });
  }
};

export const teacherMarkSubmission = (students) => async (dispatch) => {
  dispatch({ type: TEACHER_MARKSUBMISSION_REQUEST });
  try {
    const { data } = await Axios.post(API_URL + "api/teachers/marksubmission", { students });
    dispatch({ type: TEACHER_MARKSUBMISSION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TEACHER_MARKSUBMISSION_FAIL, payload: error.message });
  }
};

export const teacherRequestSubmission = (teacherID) => async (dispatch) => {
  dispatch({ type: TEACHER_SUBMISSION_REQUEST });
  try {
    const { data } = await Axios.post(API_URL + "api/teachers/submission", { teacherID });
    dispatch({ type: TEACHER_SUBMISSION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TEACHER_SUBMISSION_FAIL, payload: error.message });
  }
};

export const teacherRequestProgress = (teacherID) => async (dispatch) => {
  dispatch({ type: TEACHER_PROGRESS_REQUEST });
  try {
    const { data: beginnerData } = await Axios.post(API_URL + "api/teachers/progressbeginner", {
      teacherID,
    });
    const { data: intermediateData } = await Axios.post(
      API_URL + "api/teachers/progressintermediate",
      {
        teacherID,
      }
    );
    const { data: advancedData } = await Axios.post(API_URL + "api/teachers/progressadvance", {
      teacherID,
    });
    console.log("beginer", beginnerData);
    dispatch({
      type: TEACHER_PROGRESS_SUCCESS,
      payload: { beginnerData, intermediateData, advancedData },
    });
  } catch (error) {
    dispatch({ type: TEACHER_PROGRESS_FAIL, payload: error.message });
  }
};
