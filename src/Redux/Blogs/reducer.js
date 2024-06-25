import {
  GET_ALL_BLOGS_DETAILS_FAILURE,
  GET_ALL_BLOGS_DETAILS_REQUEST,
  GET_ALL_BLOGS_DETAILS_SUCCESS,
  GET_ALL_BLOGS_FAILURE,
  GET_ALL_BLOGS_REQUEST,
  GET_ALL_BLOGS_SUCCESS,
} from "../actionType";

const initialState = {
  isLoading: false,
  isError: false,
  blogs: [],
  detailsBlogs: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_BLOGS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_ALL_BLOGS_SUCCESS:
      return {
        ...state,
        blogs: payload,
        isLoading: false,
        isError: false,
      };
    case GET_ALL_BLOGS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case GET_ALL_BLOGS_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_ALL_BLOGS_DETAILS_SUCCESS:
      return {
        ...state,
        detailsBlogs: payload,
        isLoading: false,
        isError: false,
      };
    case GET_ALL_BLOGS_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
