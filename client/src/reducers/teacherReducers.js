const {
  TEACHER_STUDENT_PROFILES_REQUEST,
  TEACHER_STUDENT_PROFILES_SUCCESS,
  TEACHER_STUDENT_PROFILES_FAIL,
  TEACHER_HELPREQ_REQUEST,
  TEACHER_HELPREQ_SUCCESS,
  TEACHER_HELPREQ_FAIL,
  TEACHER_PROGRESS_REQUEST,
  TEACHER_PROGRESS_SUCCESS,
  TEACHER_PROGRESS_FAIL,
  TEACHER_MARKHELP_REQUEST,
  TEACHER_MARKHELP_SUCCESS,
  TEACHER_MARKHELP_FAIL,
  TEACHER_SUBMISSION_REQUEST,
  TEACHER_SUBMISSION_SUCCESS,
  TEACHER_SUBMISSION_FAIL,
  TEACHER_MARKSUBMISSION_REQUEST,
  TEACHER_MARKSUBMISSION_SUCCESS,
  TEACHER_MARKSUBMISSION_FAIL,
} = require("constants/teacherConstants");

export const teacherReqProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case TEACHER_STUDENT_PROFILES_REQUEST:
      return { loading: true };
    case TEACHER_STUDENT_PROFILES_SUCCESS:
      return { loading: false, studentsInfo: action.payload };
    case TEACHER_STUDENT_PROFILES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const teacherHelpReqReducer = (state = {}, action) => {
  switch (action.type) {
    case TEACHER_HELPREQ_REQUEST:
      return { loading: true };
    case TEACHER_HELPREQ_SUCCESS:
      return { loading: false, studentsInfo: action.payload };
    case TEACHER_HELPREQ_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const teacherSubmissionReqReducer = (state = {}, action) => {
  switch (action.type) {
    case TEACHER_SUBMISSION_REQUEST:
      return { loading: true };
    case TEACHER_SUBMISSION_SUCCESS:
      return { loading: false, studentsInfo: action.payload };
    case TEACHER_SUBMISSION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const teacherProgressReqReducer = (state = {}, action) => {
  switch (action.type) {
    case TEACHER_PROGRESS_REQUEST:
      return { loading: true };
    case TEACHER_PROGRESS_SUCCESS:
      return { loading: false, studentsInfo: action.payload };
    case TEACHER_PROGRESS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const teacherMarkRequestsReducer = (state = {}, action) => {
  switch (action.type) {
    case TEACHER_MARKHELP_REQUEST:
      return { loading: true };
    case TEACHER_MARKHELP_SUCCESS:
      return { loading: false, markRequests: action.payload };
    case TEACHER_MARKHELP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const teacherMarkSubmissionReducer = (state = {}, action) => {
  switch (action.type) {
    case TEACHER_MARKSUBMISSION_REQUEST:
      return { loading: true };
    case TEACHER_MARKSUBMISSION_SUCCESS:
      return { loading: false, markRequests: action.payload };
    case TEACHER_MARKSUBMISSION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
