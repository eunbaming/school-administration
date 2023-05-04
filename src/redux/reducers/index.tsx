import { combineReducers } from "redux";
import { schoolReducer } from "../school/state";
import { teacherReducer } from "../teachers/state";
import { studentReducer } from "../students/state";

const rootReducer = combineReducers({
  school: schoolReducer,
  teacher: teacherReducer,
  student: studentReducer,
});

export default rootReducer;
