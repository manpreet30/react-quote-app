import { combineReducers } from "redux";
import quoteReducer from "./quoteReducer";
import authReducer from "./authReducer";

const reducers = combineReducers({
  quote: quoteReducer,
  auth: authReducer,
});

export default reducers;
