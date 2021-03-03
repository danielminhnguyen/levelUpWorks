import {
  PROJECT_BUILDER_FAIL,
  PROJECT_BUILDER_REQUEST,
  PROJECT_BUILDER_SUCCESS,
  PROJECT_LIST_FAIL,
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
} from "constants/projectConstants";

export const projectListReducers = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_LIST_REQUEST:
      return { loading: true };
    case PROJECT_LIST_SUCCESS:
      return { loading: false, projectsInfo: action.payload };
    case PROJECT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const projectBuilderReducers = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_BUILDER_REQUEST:
      return { loading: true };
    case PROJECT_BUILDER_SUCCESS:
      return { loading: false, projectsInfo: action.payload };
    case PROJECT_BUILDER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
