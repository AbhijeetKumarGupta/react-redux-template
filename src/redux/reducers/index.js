
import { combineReducers } from "redux";
import dummyReducer from "./dummyReducer";

const rootReducer = combineReducers({
  tasks: dummyReducer,
});

export default rootReducer;