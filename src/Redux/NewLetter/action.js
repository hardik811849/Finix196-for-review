import axios from "axios";
import {
  POST_NEWS_LETTER_FAILURE,
  POST_NEWS_LETTER_REQUEST,
  POST_NEWS_LETTER_SUCCESS,
} from "../actionType";

export const add_emails_news_letter = (formData) => async (dispatch) => {
  dispatch({ type: POST_NEWS_LETTER_REQUEST });
  try {
    let res = await axios.post(`${import.meta.env.VITE_API_URL}new-letters`, {
      data: {
        email: formData,
      },
    });
    if (res.status === 200) {
      dispatch({ type: POST_NEWS_LETTER_SUCCESS, payload: res.data.data });
    }
  } catch (error) {
    dispatch({ type: POST_NEWS_LETTER_FAILURE });
  }
};
