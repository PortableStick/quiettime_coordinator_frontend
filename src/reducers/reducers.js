import { combineReducers } from 'redux';

const initialUserData = {
  userName: null,
  email: null,
  plans: []
};
const initialSearchData = {
  center: null,
  results: []
};
const initialUIData = {
   passwordResetRequestSent: false,
   newPasswordAfterResetSent: false,
   newUserConfirmationRequested: false,
   userConfirmed: false,
   loginSent: false,
   signupSent: false,
   userUpdateSent: false,
   userDeletionSent: false,
   searchDataSent: false,
   addLocationSent: false,
   removeLocationSent: false
 };

function userReducer(state=initialUserData, action) {
  switch (action.type) {
    case "RECEIVE_USER_DATA":
      return action.payload;
    default:
      return state;
  }
}

function searchesReducer(state=initialSearchData, action) {
  switch (action.type) {
    case "RECEIVE_SEARCH_RESULTS":
      return action.payload;
    default:
      return state;
  }
}

function uiReducer(state=initialUIData, action) {
  switch (action.type) {
    case "PASSWORD_RESET_SENT":
      return { ...state, passwordResetRequestSent: true };
    case "NEW_PASSWORD_SENT":
      return { ...state, newPasswordAfterResetSent: true }
    case "RESET_SENT_PASSWORD":
      return { ...state, passwordResetRequestSent: true, newPasswordAfterResetSent: false };
    case "USER_CONFIRMATION_REQUESTED":
      return { ...state, newUserConfirmationRequested: true }
    case "USER_CONFIRMED":
      return { ...state, newUserConfirmationRequested: false, userConfirmed: true }
    case "LOGIN_SENT":
      return { ...state, loginSent: true }
    case "RESET_LOGIN_SENT":
      return { ...state, loginSent: false }
    case "SIGNUP_SENT":
      return { ...state, signupSent: true }
    case "RESET_SIGNUP_SENT":
      return { ...state, signupSent: false }
    case "USER_UPDATE_SENT":
      return { ...state, userUpdateSent: true }
    case "RESET_USER_UPDATE_SENT":
      return { ...state, userUpdateSent: false }
    case "USER_DELETION_SENT":
      return { ...state, userDeletionSent: true }
    case "SEARCH_DATA_SENT":
      return { ...state, searchDataSent: true }
    case "ADD_LOCATION_SENT":
      return { ...state, addLocationSent: true }
    case "RESET_ADD_LOCATION_SENT":
      return { ...state, addLocationSent: false }
    case "REMOVE_LOCATION_SENT":
      return { ...state, removeLocationSent: true }
    case "RESET_REMOVE_LOCATION_SENT":
      return { ...state, removeLocationSent: false }
    case "REQUEST_RECEIVED_BY_SERVER":
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  searches: searchesReducer,
  ui: uiReducer
});

export default rootReducer;