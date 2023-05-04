const ADD = "students/ADD";

export const addStudents = (students) => ({ type: ADD, students });

const INITIAL_STATE = { students: [] };

export const studentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return {
        students: [...state.students, ...action.students],
      };
    default:
      return state;
  }
};
