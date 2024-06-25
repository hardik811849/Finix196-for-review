import {
  GET_ALL_PROPERTIES_DETAILS_FAILURE,
  GET_ALL_PROPERTIES_DETAILS_REQUEST,
  GET_ALL_PROPERTIES_DETAILS_SUCCESS,
} from "../actionType";

const initialState = {
  isLoading: false,
  isError: false,
  success: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PROPERTIES_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_ALL_PROPERTIES_DETAILS_SUCCESS:
      return {
        ...state,
        success: true,
        isLoading: false,
        isError: false,
      };
    case GET_ALL_PROPERTIES_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
