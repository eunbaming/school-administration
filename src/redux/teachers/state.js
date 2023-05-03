const ADD = "teachers/ADD";

export const addTeachers = (teachers) => ({ type: ADD, teachers });

const INITIAL_STATE = { teachers: [] };

export const teacherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return {
        teachers: [...state.teachers, ...action.teachers],
      };
    default:
      return state;
  }
};
