import fetch from 'isomorphic-fetch'
import { methods } from '../constants/methods'
import { API_URL } from '../config/config'
import { handleResponse, handleError } from '../utils/dataHandlers'
import * as Actions from '../actions/actions'

export const userService = store => next => action => {
  let user = store.getState().user
  let headers = new Headers({
    "content-type": "application/json"
  })
  let fetchParams = {
    method: methods.GET,
    headers: headers
  }
  next(action)
  switch (action.type) {
    case "SEND_RESET_PASSWORD":
      headers.set("authorization", user.token)
      store.dispatch(Actions.newPasswordSent())
      fetch(`${API_URL}/password_resets`, {...fetchParams, method: methods.PATCH, headers: headers, body: action.payload })
        .then(handleResponse)
        .then(userData => {
          store.dispatch(Actions.resetSentPassword())
          return store.dispatch(Actions.receivedUserDataAfterRequest(userData))
        }, handleError)
        .catch(handleError)
      break
    case "LOGIN":
      store.dispatch(Actions.loginSent())
      fetch(`${API_URL}/api/v1/tokens`, {...fetchParams, method: methods.POST, body: action.payload })
        .then(handleResponse)
        .then(userData => {
          store.dispatch(Actions.resetLoginSent())
          store.dispatch(Actions.persistUserData(userData))
          return store.dispatch(Actions.receivedUserDataAfterRequest(userData))
        }, handleError)
      break
    case "SIGNUP":
      store.dispatch(Actions.signupSent())
      fetch(`${API_URL}/api/v1/users`, {...fetchParams, method: methods.POST, body: action.payload })
        .then(handleResponse)
        .then(userData => {
          store.dispatch(Actions.resetSignupSent())
          store.dispatch(Actions.persistUserData(userData))
          return store.dispatch(Actions.receivedUserDataAfterRequest(userData))
        }, handleError)
        .catch(handleError)
      break
    case "UPDATE_USER_PROFILE":
      headers.set("authorization", user.token)
      store.dispatch(Actions.userUpdateSent())
      fetch(`${API_URL}/api/v1/users/${action.payload.id}`, {...fetchParams, method: methods.PATCH, body: action.payload.updatedInfo, headers: headers })
        .then(handleResponse)
        .then(userData => {
          store.dispatch(Actions.resetUserUpdateSent())
          store.dispatch(Actions.persistUserData(userData))
          return store.dispatch(Actions.receivedUserDataAfterUpdate(userData))
        }, handleError)
        .catch(handleError)
      break
    case "REQUEST_PASSWORD_RESET":
      headers.set("authorization", user.token)
      store.dispatch(Actions.passwordResetSent())
      fetch(`${API_URL}/password_resets`, {...fetchParams, method: methods.POST, body: action.payload })
        .then(response => {
          store.dispatch(Actions.resetSentPassword())
          return store.dispatch(Actions.requestReceivedByServer())
        })
        .catch(handleError)
      break
    case "SEND_USER_CONFIRMATION":
      headers.set("authorization", user.token)
      store.dispatch(Actions.newUserConfirmationSent())
      fetch(`${API_URL}/api/v1/user_confirmation/${action.payload}`, {...fetchParams, headers: headers })
        .then(response => {
          if(response.ok) {
            store.dispatch(Actions.requestReceivedByServer())
          } else {
            Actions.reportServerError("Confirmation not sent")
          }
        })
        .catch(handleError)
      break
    case "CONFIRM_USER":
      store.dispatch(Actions.userConfirmed())
      fetch(`${API_URL}/api/v1/user_confirmation/${action.payload.userid}`, {...fetchParams, method: methods.PATCH })
        .then(response => store.dispatch(Actions.requestReceivedByServer()))
        .catch(handleError)
      break
    case "DELETE_USER":
      store.dispatch(Actions.userDeletionSent())
      fetch(`${API_URL}/api/v1/users/${action.payload.id}`, {...fetchParams, method: methods.DELETE })
        .then(response => store.dispatch(Actions.requestReceivedByServer()))
        .catch(handleError)
      break
    default:
      break
  }
}