const ADD = "teachers/ADD";
const EDIT = "teachers/EDIT";
const DELETE = "teachers/DELETE";
const SET = "teachers/SET";

const SET_ADD_MODAL = "teachers/SET_ADD_MODAL";
const SET_EDIT_MODAL = "teachers/SET_EDIT_MODAL";

const SET_FILTER = "teachers/SET_FILTER";
const SET_FILTERED_TEACHERS = "teachers/SET_FILTERED_TEACHERS";

export const setTeachers = (teachers) => ({ type: SET, teachers });
export const addTeacher = (teacher) => ({ type: ADD, teacher });
export const editTeacher = (teacher) => ({ type: EDIT, teacher });
export const deleteTeacher = (teacherId) => ({ type: DELETE, teacherId });

export const setFilter = (filter) => ({ type: SET_FILTER, filter });

export const setFilteredTeachers = (filteredTeachers) => ({
  type: SET_FILTERED_TEACHERS,
  filteredTeachers,
});

export const setAddModal = (isVisAddModal) => ({
  type: SET_ADD_MODAL,
  isVisAddModal,
});

export const setEditModal = (isVisEditModal) => ({
  type: SET_EDIT_MODAL,
  isVisEditModal,
});

const INITIAL_STATE = {
  teachers: [],
  isVisAddModal: false,
  isVisEditModal: false,
  filter: "name",
  filteredTeachers: [],
};

export const teacherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET:
      return {
        ...state,
        teachers: action.teachers,
      };
    case ADD:
      return {
        ...state,
        teachers: [...state.teachers, action.teacher],
        filteredTeachers: [...state.filteredTeachers, action.teacher],
      };
    case EDIT:
      return {
        ...state,
        teachers: state.teachers.map((item) => {
          if (item.id === action.teacher.id) {
            return action.teacher;
          } else {
            return item;
          }
        }),
        filteredTeachers: state.filteredTeachers.map((item) => {
          if (item.id === action.teacher.id) {
            return action.teacher;
          } else {
            return item;
          }
        }),
      };
    case DELETE:
      return {
        ...state,
        teachers: state.teachers.filter((item) => {
          return item.id !== action.teacherId;
        }),
        filteredTeachers: state.filteredTeachers.filter((item) => {
          return item.id !== action.teacherId;
        }),
      };
    case SET_ADD_MODAL:
      return {
        ...state,
        isVisAddModal: action.isVisAddModal,
      };
    case SET_EDIT_MODAL:
      return {
        ...state,
        isVisEditModal: action.isVisEditModal,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    case SET_FILTERED_TEACHERS:
      return {
        ...state,
        filteredTeachers: action.filteredTeachers,
      };
    default:
      return state;
  }
};
