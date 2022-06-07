import {combineReducers} from "redux";
import firstDataReducer from "./firstDataReducer";

const rootReducer = combineReducers({
    languages: firstDataReducer
});

export default rootReducer;