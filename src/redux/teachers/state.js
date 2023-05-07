const ADD = "teachers/ADD";
const EDIT = "teachers/EDIT";
const DELETE = "teachers/DELETE";

const SET_ADD_MODAL = "teachers/SET_ADD_MODAL";
const SET_EDIT_MODAL = "teachers/SET_EDIT_MODAL";

const SET_FILTER = "teachers/SET_FILTER";
const SET_FILTERED_TEACHERS = "teachers/SET_FILTERED_TEACHERS";

export const addTeachers = (teachers) => ({ type: ADD, teachers });
export const editTeacher = (teacher, index) => ({ type: EDIT, teacher, index });
export const deleteTeacher = (deleteIndex) => ({ type: DELETE, deleteIndex });

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
    case ADD:
      return {
        ...state,
        teachers: [...state.teachers, ...action.teachers],
      };
    case EDIT:
      return {
        ...state,
        teachers: state.teachers.map((item, index) => {
          if (index === action.index) {
            return action.teacher;
          } else {
            return item;
          }
        }),
      };
    case DELETE:
      const deletedTeacher = state.teachers[action.deleteIndex];

      const deletedFilteredTeachers = state.filteredTeachers.filter((item) => {
        return item !== deletedTeacher;
      });

      return {
        ...state,
        teachers: state.teachers.filter((item, index) => {
          return index !== action.deleteIndex;
        }),
        filteredTeachers: deletedFilteredTeachers,
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
