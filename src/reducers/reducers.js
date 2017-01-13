import { combineReducers } from 'redux'

const initialUserData = {
  username: null,
  email: null,
  plans: [],
  token: null,
  loggedIn: false
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
   error: null
 }

function userReducer(state=initialUserData, action) {
  switch (action.type) {
    case "RECEIVE_USER_DATA":
      return {...action.payload.user, token: action.payload.jwt, loggedIn: true}
    default:
      return state
  }
}

function searchesReducer(state=initialSearchData, action) {
  switch (action.type) {
    case "RECEIVE_SEARCH_RESULTS":
      return action.payload || []
    default:
      return state
  }
}

function uiReducer(state=initialUIData, action) {
  switch (action.type) {
    case "REPORT_SERVER_ERROR":
      console.log("Error is ", action.payload)
      return { ...state, error: action.payload }
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







// {
//   rating: result["rating"],
//   url: result["url"],
//   name: result["name"],
//   image_url: result["image_url"],
//   snippet_text: result["snippet_text"],
//   id: result["id"],
//   review_count: result["review_count"],
//   user_going: current_user ? current_user["plans"].include?(result["id"]) : false,
//   attending: locations[result["id"]] ? locations[result["id"]] : 0
// }
//
// {
  //   rating: 5.0,
  //   url: "http://yelp.com",
  //   name: "Library",
  //   image_url: "https://lh3.googleusercontent.com/J41hsV2swVteoeB8pDhqbQR3H83NrEBFv2q_kYdq1xp9vsI1Gz9A9pzjcwX_JrZpPGsa=w300",
  //   snippet_text: "It's a place of stuff",
  //   id: "super-cool-library",
  //   review_count: 25,
  //   user_going: true,
  //   attending: 2
  // },
  // {
  //   rating: 2.2,
  //   url: "http://yelp.com",
  //   name: "Bar",
  //   image_url: "https://lh3.googleusercontent.com/J41hsV2swVteoeB8pDhqbQR3H83NrEBFv2q_kYdq1xp9vsI1Gz9A9pzjcwX_JrZpPGsa=w300",
  //   snippet_text: "It's a place of puke",
  //   id: "super-uncool-nonlibrary",
  //   review_count: 198,
  //   user_going: false,
  //   attending: 27
  // },
  // {
  //   rating: 4.3,
  //   url: "http://yelp.com",
  //   name: "Dogs",
  //   image_url: "https://lh3.googleusercontent.com/J41hsV2swVteoeB8pDhqbQR3H83NrEBFv2q_kYdq1xp9vsI1Gz9A9pzjcwX_JrZpPGsa=w300",
  //   snippet_text: "Woooooof!",
  //   id: "love",
  //   review_count: 2574,
  //   user_going: true,
  //   attending: 62
  // }
