import { combineReducers } from "redux";
import {reducer} from '../school/state'

const rootReducer = combineReducers({
    school: reducer
});

export default rootReducer;
