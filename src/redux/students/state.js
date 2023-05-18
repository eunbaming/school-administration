const ADD = "students/ADD";
const EDIT = "students/EDIT";
const DELETE = "students/DELETE";

const SET_FILTER = "students/SET_FILTER";
const SET_FILTERED_STUDENTS = "students/SET_FILTERED_STUDENTS";

const SET_EDIT_MODAL = "students/SET_EDIT_MODAL";

const SET_GENDER_RATIO = "students/SET_GENDER_RATIO";
const SET_CLASS_RATIO = "studnets/SET_CLASS_RATIO";

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

export const setStuGenderRatio = (stuMaleNum, stuFemaleNum) => ({
  type: SET_GENDER_RATIO,
  stuMaleNum,
  stuFemaleNum,
});

export const setClassRatio = (freshNum, juniorNum, seniorNum) => ({
  type: SET_CLASS_RATIO,
  freshNum,
  juniorNum,
  seniorNum,
});

const INITIAL_STATE = {
  students: [],
  isVisEditModal: false,
  filteredStudent: [],
  filter: "name",
  searchStudents: [],
  stuMaleNum: 0,
  stuFemaleNum: 0,
  freshNum: 0,
  juniorNum: 0,
  seniorNum: 0,
};

export const studentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        students: [...state.students, ...action.students],
        filteredStudent: [...state.filteredStudent, ...action.students],
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
      console.log("SET_EDIT_MODAL");
      return {
        ...state,
        isVisEditModal: action.isVisEditModal,
      };
    case SET_GENDER_RATIO:
      return {
        ...state,
        stuMaleNum: action.stuMaleNum,
        stuFemaleNum: action.stuFemaleNum,
      };
    case SET_CLASS_RATIO:
      return {
        ...state,
        freshNum: action.freshNum,
        juniorNum: action.juniorNum,
        seniorNum: action.seniorNum,
      };
    default:
      return state;
  }
};
