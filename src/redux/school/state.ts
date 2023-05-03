
export const ADD = 'school/ADD';

export const addSchool = (schools: Array<any>) => ({type: ADD, schools});

const INITIAL_STATE = {schools: []};

export const reducer = (state = INITIAL_STATE, action: any) => {
    console.log("action", action)
    switch(action.type) {
        case ADD:
            return {
                schools: [
                    ...state.schools,
                    ...action.schools,
                ]
            }
        default:
            return state;
    }
}


