import {
  LANGUAGES_FETCHING_REQUEST,
  LANGUAGES_FETCHING_SUCCESS,
} from "../../commons/commons";
import { getAllData } from "../../service/DataSerivce.service";

export const fetchAllData = () => async (dispatch, unknown, action) => {
  dispatch({
    type: LANGUAGES_FETCHING_REQUEST,
  });
  const fetchAllData = await getAllData();
  dispatch({ type: LANGUAGES_FETCHING_SUCCESS, payload: fetchAllData.data });
};
