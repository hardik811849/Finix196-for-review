import axios from "axios";
import {
  GET_ALL_PROPERTIES_DETAILS_FAILURE,
  GET_ALL_PROPERTIES_DETAILS_REQUEST,
  GET_ALL_PROPERTIES_DETAILS_SUCCESS,
  GET_ALL_PROPERTIES_FAILURE,
  GET_ALL_PROPERTIES_REQUEST,
  GET_ALL_PROPERTIES_SUCCESS,
} from "../actionType";

export const get_properties = () => async (dispatch) => {
  dispatch({ type: GET_ALL_PROPERTIES_REQUEST });
  try {
    let res = await axios.get(`${import.meta.env.VITE_API_URL}properties`);
    // console.log(res.data.data);
    if (res.status === 200) {
      dispatch({ type: GET_ALL_PROPERTIES_SUCCESS, payload: res.data.data });
    }
  } catch (error) {
    dispatch({ type: GET_ALL_PROPERTIES_FAILURE });
  }
};

export const get_details_properties = (id) => async (dispatch) => {
  dispatch({ type: GET_ALL_PROPERTIES_DETAILS_REQUEST });
  try {
    let res = await axios.get(
      `${import.meta.env.VITE_API_URL}properties/${id}`
    );
    // console.log(res.data.data);
    if (res.status === 200) {
      dispatch({
        type: GET_ALL_PROPERTIES_DETAILS_SUCCESS,
        payload: res.data.data,
      });
    }
  } catch (error) {
    dispatch({ type: GET_ALL_PROPERTIES_DETAILS_FAILURE });
  }
};
