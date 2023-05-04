import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  userReducer: null,
  isLoading: false,
  error: null,
};

//Always return an object that spreads through the previous state
//then update the relevant values we care about
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null };
    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
      return { ...state, error: payload };
    default:
      return state;
  }
};
