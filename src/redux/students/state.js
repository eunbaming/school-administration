const ADD = "students/ADD";
const EDIT = "students/EDIT";

const SET_EDIT_MODAL = "teachers/SET_EDIT_MODAL";

export const addStudents = (students) => ({ type: ADD, students });
export const editStudent = (student, index) => ({ type: EDIT, student, index });

export const setEditModal = (isVisEditModal) => ({
  type: SET_EDIT_MODAL,
  isVisEditModal,
});

const INITIAL_STATE = { students: [], isVisEditModal: false };

export const studentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        students: [...state.students, ...action.students],
      };
    case EDIT:
      return {
        ...state,
        students: state.students.map((item, index) => {
          if (index === action.index) {
            return action.student;
          } else {
            return item;
          }
        }),
      };
    case SET_EDIT_MODAL:
      return {
        ...state,
        isVisEditModal: action.isVisEditModal,
      };
    default:
      return state;
  }
};
