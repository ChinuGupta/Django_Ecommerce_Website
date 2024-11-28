import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_LOGOUT
} from "../constants/userConstants";

// export const userLoginReducers = (state = {}, action) => {
//   switch (action.type) {
//     case USER_LOGIN_REQUEST:
//       return { loading: true};

//     case USER_LOGIN_SUCCESS:
//       return { loading: false, userInfo: action.payload };

//     case USER_LOGIN_FAIL:
//       return { loading: false, error: action.payload };

//     default:
//       return state;
//   }
// };

export const userSignupReducers = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { loading: true, ...state };

    case USER_SIGNUP_SUCCESS:
      return { loading: false, userInfo: action.payload };

    case USER_SIGNUP_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  } 
};

export const userLoginReducers = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true, ...state }; // While loading, keep the current state
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }; // Successful login, store userInfo
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }; // Login failed, store error
    case USER_LOGOUT:
      return {}; 
    default:
      return state;
  }
};