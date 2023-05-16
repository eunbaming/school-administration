
const ADD = 'school/ADD';
const SET = 'school/SET';

export const addSchool = (schools: Array<any>) => ({type: ADD, schools});

export const setSchools = (schools: Array<any>) => ({type: SET, schools});

const INITIAL_STATE = {schools: []};

export const schoolReducer = (state = INITIAL_STATE, action: any) => {
    console.log("action", action)
    switch(action.type) {
        case ADD:
            return {
                schools: [
                    ...state.schools,
                    ...action.schools,
                ]
            }
        case SET:
            return {
                schools: state.schools,
            }
        default:
            return state;
    }
}


