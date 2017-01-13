import fetch from 'isomorphic-fetch'
import { passwordResetSent,
        newPasswordSent,
        newUserConfirmationSent,
        userConfirmed,
        loginSent,
        signupSent,
        userUpdateSent,
        userDeletionSent,
        searchDataSent,
        addLocationSent,
        removeLocationSent,
        requestReceivedByServer,
        receivedUserDataAfterRequest,
        reportServerError,
        receiveSearchResults,
        resetLoginSent } from '../actions/actions'

const API_URL = "http://localhost:3000"
const methods = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  DELETE: 'DELETE'
}

export const dataService = store => next => action => {
  let user = store.getState().user
  let headers = new Headers({

    "content-type": "application/json"
  })
  let fetchParams = {
    method: methods.GET,
    headers: headers
  }
  next(action)
  switch(action.type) {
    case "REQUEST_PASSWORD_RESET":
      store.dispatch(passwordResetSent())
      fetch(`${API_URL}/password_resets`, {...fetchParams, method: methods.POST })
        .then(response => store.dispatch(requestReceivedByServer()))
        .catch(error => store.dispatch(reportServerError(error)))
      break
    case "SEND_RESET_PASSWORD":
      store.dispatch(newPasswordSent())
      fetch(`${API_URL}/password_resets`, {...fetchParams, method: methods.PATCH })
        .then(response => response.json())
        .then(userData => {
          store.dispatch(resetSentPassword())
          return store.dispatch(receivedUserDataAfterRequest(userData))
        })
        .catch(error => store.dispatch(reportServerError(error)))
      break
    case "SEND_USER_CONFIRMATION":
      store.dispatch(newUserConfirmationSent())
      fetch(`${API_URL}/api/v1/user_confirmation`, {...fetchParams, method: methods.POST })
        .then(response => store.dispatch(requestReceivedByServer()))
        .catch(error => store.dispatch(reportServerError(error)))
      break
    case "CONFIRM_USER":
      store.dispatch(userConfirmed())
      fetch(`${API_URL}/api/v1/user_confirmation/${action.payload.userid}`, {...fetchParams, method: methods.PATCH })
        .then(response => store.dispatch(requestReceivedByServer()))
        .catch(error => store.dispatch(reportServerError(error)))
      break
    case "LOGIN":
      store.dispatch(loginSent())
      fetch(`${API_URL}/api/v1/tokens`, {...fetchParams, method: methods.POST, body: action.payload })
        .then(response => response.json())
        .then(userData => {
          store.dispatch(resetLoginSent())
          return store.dispatch(receivedUserDataAfterRequest(userData))
        })
        .catch(error => store.dispatch(reportServerError(error)))
      break
    case "SIGNUP":
      store.dispatch(signupSent())
      fetch(`${API_URL}/api/v1/users`, {...fetchParams, method: methods.POST })
        .then(response => response.json())
        .then(userData => {
          store.dispatch(resetSignupSent())
          return store.dispatch(receivedUserDataAfterRequest(userData))
        })
        .catch(error => store.dispatch(reportServerError(error)))
      break
    case "UPDATE_USER_PROFILE":
      store.dispatch(userUpdateSent())
      fetch(`${API_URL}/api/v1/users/${action.payload.userid}`, {...fetchParams, method: methods.PATCH })
        .then(response => response.json())
        .then(userData => {
          store.dispatch(resetUserUpdateSent())
          return store.dispatch(receivedUserDataAfterRequest(userData))
        })
        .catch(error => store.dispatch(reportServerError(error)))
      break
    case "DELETE_USER":
      store.dispatch(userDeletionSent())
      fetch(`${API_URL}/api/v1/users/${action.payload.userid}`, {...fetchParams, method: methods.DELETE })
        .then(response => store.dispatch(requestReceivedByServer()))
        .catch(error => store.dispatch(reportServerError(error)))
      break
    case "SEND_SEARCH_DATA":
      store.dispatch(searchDataSent())
      fetch(`${API_URL}/api/v1/searches`, {...fetchParams, method: methods.POST, body: action.payload})
        .then(response => response.json())
        .then(results => store.dispatch(receiveSearchResults(results)))
        .catch(error => store.dispatch(reportServerError(error)))
      break
    case "ADD_LOCATION_TO_USER":
      store.dispatch(addLocationSent())
      fetch(`${API_URL}/api/v1/plans`, {...fetchParams, method: methods.POST })
        .then(response => response.json())
        .then(userData => {
          store.dispatch(resetAddLocationSent())
          return store.dispatch(receivedUserDataAfterRequest(userData))
        })
        .catch(error => store.dispatch(reportServerError(error)))
      break
    case "REMOVE_LOCATION_FROM_USER":
      store.dispatch(removeLocationSent())
      fetch(`${API_URL}/api/v1/plans${action.payload.location}`, {...fetchParams, method: methods.DELETE })
        .then(response => response.json())
        .then(userData => {
          store.dispatch(resetRemoveLocationSent())
          return store.dispatch(receivedUserDataAfterRequest(userData))
        })
        .catch(error => store.dispatch(reportServerError(error)))
      break
    default:
     break
  }
}
