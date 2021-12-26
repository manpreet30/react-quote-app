import { combineReducers } from "redux";
import quoteReducer from "./quoteReducer";

const reducers = combineReducers({
  quote: quoteReducer,
});

export default reducers;
