import axios from "axios";
import {
  GET_ALL_BLOGS_DETAILS_FAILURE,
  GET_ALL_BLOGS_DETAILS_REQUEST,
  GET_ALL_BLOGS_DETAILS_SUCCESS,
  GET_ALL_BLOGS_FAILURE,
  GET_ALL_BLOGS_REQUEST,
  GET_ALL_BLOGS_SUCCESS,
} from "../actionType";

export const get_all_blogs = () => async (dispatch) => {
  dispatch({ type: GET_ALL_BLOGS_REQUEST });
  try {
    let res = await axios.get(
      `${import.meta.env.VITE_API_URL}blogs?populate=*`
    );
    // console.log(res);
    if (res.status === 200) {
      dispatch({ type: GET_ALL_BLOGS_SUCCESS, payload: res.data.data });
    }
  } catch (error) {
    dispatch({ type: GET_ALL_BLOGS_FAILURE });
  }
};

export const get_details_blogs = (id) => async (dispatch) => {
  dispatch({ type: GET_ALL_BLOGS_DETAILS_REQUEST });
  try {
    let res = await axios.get(
      `${import.meta.env.VITE_API_URL}blogs/${id}?populate=*`
    );
    // console.log(res.data.data);
    if (res.status === 200) {
      dispatch({
        type: GET_ALL_BLOGS_DETAILS_SUCCESS,
        payload: res.data.data,
      });
    }
  } catch (error) {
    dispatch({ type: GET_ALL_BLOGS_DETAILS_FAILURE });
  }
};
