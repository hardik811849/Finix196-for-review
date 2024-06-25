import {
  POST_CONTACT_US_FAILURE,
  POST_CONTACT_US_REQUEST,
  POST_CONTACT_US_SUCCESS,
} from "../actionType";

const initialState = {
  isLoading: false,
  isError: false,
  success: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_CONTACT_US_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case POST_CONTACT_US_SUCCESS:
      return {
        ...state,
        success: true,
        isLoading: false,
        isError: false,
      };
    case POST_CONTACT_US_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
