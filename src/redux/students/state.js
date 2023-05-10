const ADD = "students/ADD";
const EDIT = "students/EDIT";
const DELETE = "students/DELETE";

const SET_FILTER = "students/SET_FILTER";
const SET_FILTERED_STUDENTS = "students/SET_FILTERED_STUDENTS";

const SET_EDIT_MODAL = "students/SET_EDIT_MODAL";

export const addStudents = (students) => ({ type: ADD, students });
export const editStudent = (student, index) => ({ type: EDIT, student, index });
export const deleteStudent = (deleteIndex) => ({ type: DELETE, deleteIndex });

export const setEditModal = (isVisEditModal) => ({
  type: SET_EDIT_MODAL,
  isVisEditModal,
});

export const setFilteredSelect = (filter) => ({ type: SET_FILTER, filter });
export const setFilteredStudents = (filteredStudents) => ({
  type: SET_FILTERED_STUDENTS,
  filteredStudents,
});

const INITIAL_STATE = {
  students: [],
  isVisEditModal: false,
  filteredStudent: [],
  filter: "name",
  searchStudents: [],
};

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
    case DELETE:
      const deletedStudent = state.students[action.deleteIndex];
      const deletedFilteredStudents = state.filteredStudent.filter((item) => {
        return item !== deletedStudent;
      });
      return {
        ...state,
        students: state.students.filter((item, index) => {
          return index !== action.deleteIndex;
        }),
        filteredStudent: deletedFilteredStudents,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    case SET_FILTERED_STUDENTS:
      return {
        ...state,
        filteredStudent: action.filteredStudents,
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
