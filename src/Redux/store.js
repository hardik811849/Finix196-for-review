import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as propertyReducer } from "./Properties/reducer";
import { reducer as newsLetterReducer } from "./NewLetter/reducer";
import { reducer as contactUsReducer } from "./ContactUs/reducer";
import { reducer as blogReducer } from "./Blogs/reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  propertyReducer,
  newsLetterReducer,
  contactUsReducer,
  blogReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
