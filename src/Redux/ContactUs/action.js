import axios from "axios";
import {
  POST_CONTACT_US_FAILURE,
  POST_CONTACT_US_REQUEST,
  POST_CONTACT_US_SUCCESS,
} from "../actionType";

export const add_contact_us_form =
  (name, email, phoneNumber, message) => async (dispatch) => {
    dispatch({ type: POST_CONTACT_US_REQUEST });
    try {
      let res = await axios.post(`${import.meta.env.VITE_API_URL}contact-us`, {
        data: {
          Name: name,
          Email: email,
          PhoneNumber: phoneNumber,
          Message: message,
        },
      });
      if (res.status === 200) {
        dispatch({ type: POST_CONTACT_US_SUCCESS, payload: res.data.data });
      }
    } catch (error) {
      dispatch({ type: POST_CONTACT_US_FAILURE });
    }
  };
