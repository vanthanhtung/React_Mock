import {
  LANGUAGES_FETCHING_REQUEST,
  LANGUAGES_FETCHING_SUCCESS,
} from "../../commons/commons";

const initialData = {
  data: [],
  loading: false,
};

const firstDataReducer = (state = initialData, action) => {
  switch (action.type) {
    case LANGUAGES_FETCHING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LANGUAGES_FETCHING_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default firstDataReducer;
