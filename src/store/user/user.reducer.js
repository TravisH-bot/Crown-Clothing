import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  userReducer: null,
};

//Always return an object that spreads through the previous state
//then update the relevant values we care about
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
