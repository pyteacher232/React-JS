import {combineReducers} from "redux";
import scheduleCheck from "./schedule_check";
import fetchAPI from "./fetch_api";

const reducers = combineReducers({
    scheduleCheck, fetchAPI
});

export default reducers;

