import { combineReducers } from "redux";
import { schoolReducer } from "../school/state";
import { teacherReducer } from "../teachers/state";
import { studentReducer } from "../students/state";
import { tabReducer } from "../tab/state";

const rootReducer = combineReducers({
  school: schoolReducer,
  teacher: teacherReducer,
  student: studentReducer,
  tab: tabReducer,
});

export default rootReducer;
