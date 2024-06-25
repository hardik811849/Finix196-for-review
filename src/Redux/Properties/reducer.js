import {
  GET_ALL_PROPERTIES_DETAILS_FAILURE,
  GET_ALL_PROPERTIES_DETAILS_REQUEST,
  GET_ALL_PROPERTIES_DETAILS_SUCCESS,
  GET_ALL_PROPERTIES_FAILURE,
  GET_ALL_PROPERTIES_REQUEST,
  GET_ALL_PROPERTIES_SUCCESS,
} from "../actionType";

const initialState = {
  properties: [],
  property: {},
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PROPERTIES_SUCCESS:
      return {
        ...state,
        properties: payload,
        isLoading: false,
        isError: false,
      };
    case GET_ALL_PROPERTIES_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_ALL_PROPERTIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case GET_ALL_PROPERTIES_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_ALL_PROPERTIES_DETAILS_SUCCESS:
      return {
        ...state,
        property: payload,
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
