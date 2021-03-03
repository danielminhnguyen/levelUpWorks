import Axios from "axios";
import { API_URL } from "../config/index.js";
import {
  PROJECT_BUILDER_FAIL,
  PROJECT_BUILDER_REQUEST,
  PROJECT_BUILDER_SUCCESS,
  PROJECT_LIST_FAIL,
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
} from "constants/projectConstants";

export const listProjects = (values) => async (dispatch) => {
  const {
    free,
    premium,
    animation,
    game,
    chatbot,
    ar,
    onefour,
    fivesix,
    seveneight,
    ninethirteen,
    computer,
    maths,
    science,
    language,
    art,
    music,
    course,
    showLimit,
  } = values;

  const subscription = [].concat(free ? "'Free'" : [], premium ? "'Premium'" : []);
  const activity = [].concat(
    animation ? "'Animation'" : [],
    game ? "'Game'" : [],
    chatbot ? "'Chatbot'" : [],
    ar ? "'Augmented Reality'" : []
  );
  const subject = [].concat(
    computer ? "'Computer'" : [],
    maths ? "'Maths'" : [],
    science ? "'Science'" : [],
    language ? "'Language'" : [],
    art ? "'Art'" : [],
    music ? "'Music'" : []
  );
  const level = [].concat(
    onefour ? [1, 2, 3, 4] : [],
    fivesix ? [5, 6] : [],
    seveneight ? [7, 8] : [],
    ninethirteen ? [9, 13] : []
  );

  dispatch({ type: PROJECT_LIST_REQUEST });
  try {
    const { data } = await Axios.get(
      API_URL +
        `api/projects/filter?course='${course}'&limit=${showLimit}&subscription=${subscription}&activity=${activity}&subject=${subject}&level=${level}`
    );
    // console.log(
    //   `/api/projects/filter?course='${course}'&limit=${showLimit}&subscription=${subscription}&activity=${activity}&subject=${subject}&level=${level}`
    // );
    dispatch({ type: PROJECT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PROJECT_LIST_FAIL, payload: error.message });
  }
};

export const projectbuilder = (id) => async (dispatch) => {
  dispatch({ type: PROJECT_BUILDER_REQUEST });
  try {
    console.log("id action", id);
    const { data } = await Axios.get(API_URL + `api/projects/builder?projectid=${id}`);
    dispatch({ type: PROJECT_BUILDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PROJECT_BUILDER_FAIL, payload: error.message });
  }
};
