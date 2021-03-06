import { browserHistory } from 'react-router'
/****************************
*     UI Changes            *
****************************/
export const confirmUserLogout = () => ({ type: "CONFIRM_USER_LOGOUT" })
export const endUserLogout = () => ({ type: "END_USER_LOGOUT" })
export const passwordResetSent = () => ({ type: "PASSWORD_RESET_SENT" })
export const newPasswordSent = () => ({ type: "NEW_PASSWORD_SENT" })
export const newUserConfirmationSent = () => ({ type: "USER_CONFIRMATION_REQUESTED" })
export const userConfirmed = () => ({ type: "USER_CONFIRMED" })
export const loginSent = () => ({ type: "LOGIN_SENT" })
export const signupSent = () => ({ type: "SIGNUP_SENT" })
export const logout = () => {
  browserHistory.push('/')
  return {type: "LOGOUT"}
}
export const userUpdateSent = () => ({ type: "USER_UPDATE_SENT" })
export const userDeletionSent = () => ({ type: "USER_DELETION_SENT" })
export const searchDataSent = () => ({ type: "SEARCH_DATA_SENT" })
export const resetSearchDataSent = () => ({ type: "RESET_SEARCH_DATA_SENT" })
export const addLocationSent = () => ({ type: "ADD_LOCATION_SENT" })
export const removeLocationSent = () => ({ type: "REMOVE_LOCATION_SENT" })
export const requestReceivedByServer = () => ({ type: "REQUEST_RECEIVED_BY_SERVER" })
export const resetSentPassword = () => {
  browserHistory.push('/')
  return { type: "RESET_SENT_PASSWORD" }
}
export const resetLoginSent = () => ({ type: "RESET_LOGIN_SENT" })
export const resetSignupSent = () => ({ type: "RESET_SIGNUP_SENT" })
export const resetUserUpdateSent = () => ({ type: "RESET_USER_UPDATE_SENT" })
export const resetAddLocationSent = () => ({ type: "RESET_ADD_LOCATION_SENT" })
export const resetRemoveLocationSent = () => ({ type: "RESET_REMOVE_LOCATION_SENT" })
export const turnOnEditMode = () => ({ type: "TURN_ON_EDIT_MODE" })
export const turnOffEditMode = () => ({ type: "TURN_OFF_EDIT_MODE" })
export const turnOnPasswordEditMode = () => ({ type: "TURN_ON_PASSWORD_EDIT_MODE" })
export const turnOffPasswordEditMode = () => ({ type: "TURN_OFF_PASSWORD_EDIT_MODE" })
export const enableGeolocation = () => ({ type: "ENABLE_GEOLOCATION" })
export const setCoordinates = coordinates => ({ type: "SET_COORDINATES", payload: coordinates })
export const confirmAddLocation = (plans, inc) => ({ type: "CONFIRM_ADD_LOCATION", payload: plans, inc: inc })
export const confirmRemoveLocation = (plans, inc) => ({ type: "CONFIRM_REMOVE_LOCATION", payload: plans, inc: inc })
export const persistUserData = userData => ({ type: "PERSIST_USER_DATA", payload: userData })
export const persistUserLoggedin = loggedIn => ({ type: "PERSIST_USER_LOGGEDIN", payload: loggedIn })
export const persistUserCoordinates = coordinates => ({ type: "PERSIST_USER_COORDINATES", payload: coordinates })
export const clearUserData = () => ({ type: "CLEAR_USER_DATA" })
export const reportLocalStorageError = error => ({ type: "LOCAL_STORAGE_ERROR", payload: error })
/****************************
*   Middleware Invocations  *
****************************/

export const sendResetPassword = () => ({ type: "SEND_RESET_PASSWORD" })
export const sendUserConfirmation = id => ({ type: "SEND_USER_CONFIRMATION", payload: id })
export const confirmUser = () => ({ type: "CONFIRM_USER" })
export const login = credentials => ({ type: "LOGIN", payload: credentials })
export const signup = credentials => ({ type: "SIGNUP", payload: credentials })
export const updateUserProfile = data => ({ type: "UPDATE_USER_PROFILE", payload: data})
export const deleteUser = data => ({ type: "DELETE_USER", payload: data })
export const sendUnauthenticatedSearchData = searchParameters => ({ type: "SEND_UNAUTHENTICATED_SEARCH_DATA", payload: searchParameters })
export const sendAuthenticatedSearchData = searchParameters => ({ type: "SEND_AUTHENTICATED_SEARCH_DATA", payload: searchParameters })
export const addLocationToUser = data => ({ type: "ADD_LOCATION_TO_USER", payload: data })
export const removeLocationFromUser = data => ({ type: "REMOVE_LOCATION_FROM_USER", payload: data })

/****************************
*  Middleware Responses     *
****************************/

export const receivedUserDataAfterRequest = userData => {
  browserHistory.push('/search')
  return { type: "RECEIVE_USER_DATA", payload: userData}
}
export const receivedUserDataAfterUpdate = userData => ({ type: "RECEIVE_USER_DATA", payload: userData})
export const reportServerError = error => {
  console.error(`Error reported: ${error}`)
  return { type: "REPORT_SERVER_ERROR", payload: error}
}
export const receiveSearchResults = results => ({ type: "RECEIVE_SEARCH_RESULTS", payload: results})
export const requestPasswordReset = email => ({ type: "REQUEST_PASSWORD_RESET", payload: email })