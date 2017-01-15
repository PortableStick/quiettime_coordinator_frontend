import { combineReducers } from 'redux'

const initialUserData = {
  username: null,
  email: null,
  plans: [],
  loggedIn: false,
  coordinates: null,
  token: null,
  id: null
}

const initialSearchData = {
  center: null,
  results: []
}
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
   removeLocationSent: false,
   editMode: false,
   passwordEditMode: false,
   isUsingGeolocation: false,
   error: null,
   localStorageError: null
 }

function userReducer(state=initialUserData, action) {
  switch (action.type) {
    case "RECEIVE_USER_DATA":
      return {...state, ...action.payload.user, loggedIn: true }
    case "CONFIRM_ADD_LOCATION":
    case "CONFIRM_REMOVE_LOCATION":
      return {...state, plans: action.payload }
    case "LOGOUT":
      return {...initialUserData }
    case "SET_COORDINATES":
      return {...state, coordinates: action.payload }
    default:
      return state
  }
}

function searchesReducer(state=initialSearchData, action) {
  switch (action.type) {
    case "RECEIVE_SEARCH_RESULTS":
      return {...action.payload}
    case "RECEIVE_USER_DATA":
      const updatedResults = state.results.map(result => ({...result, user_going: action.payload.user.plans.indexOf(result.id) > -1}))
      return {...state, results: updatedResults}
    case "CONFIRM_ADD_LOCATION":
    case "CONFIRM_REMOVE_LOCATION":
      const updatedResults2 = state.results.map(result => ({...result, user_going: action.payload.indexOf(result.id) > -1}))
      return {...state, results: updatedResults2}
    default:
      return state
  }
}

function uiReducer(state=initialUIData, action) {
  switch (action.type) {
    case "REPORT_SERVER_ERROR":
      return { ...state, error: action.payload }
    case "LOCAL_STORAGE_ERROR":
      return { ...state, localStorageError: action.payload }
    case "PASSWORD_RESET_SENT":
      return { ...state, passwordResetRequestSent: true }
    case "NEW_PASSWORD_SENT":
      return { ...state, newPasswordAfterResetSent: true }
    case "RESET_SENT_PASSWORD":
      return { ...state, passwordResetRequestSent: true, newPasswordAfterResetSent: false }
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
    case "RESET_SEARCH_DATA_SENT":
      return { ...state, searchDataSent: false }
    case "ADD_LOCATION_SENT":
      return { ...state, addLocationSent: true }
    case "RESET_ADD_LOCATION_SENT":
      return { ...state, addLocationSent: false }
    case "REMOVE_LOCATION_SENT":
      return { ...state, removeLocationSent: true }
    case "RESET_REMOVE_LOCATION_SENT":
      return { ...state, removeLocationSent: false }
    case "TURN_ON_EDIT_MODE":
      return { ...state, editMode: true }
    case "TURN_OFF_EDIT_MODE":
      return { ...state, editMode: false }
    case "TURN_ON_PASSWORD_EDIT_MODE":
      return { ...state, passwordEditMode: true }
    case "TURN_OFF_PASSWORD_EDIT_MODE":
      return { ...state, passwordEditMode: false }
    case "ENABLE_GEOLOCATION":
      return { ...state, isUsingGeolocation: true}
    case "CONFIRM_ADD_LOCATION":
    case "REQUEST_RECEIVED_BY_SERVER":
    default:
      return state
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  searches: searchesReducer,
  ui: uiReducer
})

export default rootReducer
