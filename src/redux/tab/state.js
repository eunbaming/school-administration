const SET_CURRENT_TAB = "tab/SET_CURRENT_TAB";

export const setCurrentTab = (currentTab) => ({
  type: SET_CURRENT_TAB,
  currentTab,
});

const INITIAL_STATE = {
  currentTab:
    localStorage.getItem("currentTab") !== null
      ? localStorage.getItem("currentTab")
      : "dashboard",
};

export const tabReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_TAB:
      return {
        ...state,
        currentTab: action.currentTab,
      };
    default:
      return state;
  }
};
