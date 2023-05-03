import { combineReducers } from "redux";
import {schoolReducer} from '../school/state'
import {teacherReducer} from '../teachers/state';

const rootReducer = combineReducers({
    school: schoolReducer,
    teacher: teacherReducer,
});

export default rootReducer;
