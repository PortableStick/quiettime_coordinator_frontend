import fetch from 'isomorphic-fetch'
import { methods } from '../constants/methods'
import { API_URL } from '../config/config'
import { handleResponse, handleError } from '../utils/dataHandlers'
import * as Actions from '../actions/actions'

export const locationService = store => next => action => {
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
    case "ADD_LOCATION_TO_USER":
      store.dispatch(Actions.addLocationSent())
      headers.set("authorization", user.token)
      fetch(`${API_URL}/api/v1/plans`, {...fetchParams, method: methods.POST, headers: headers, body: action.payload.updateData })
        .then(handleResponse)
        .then(response => {
          store.dispatch(Actions.resetAddLocationSent())
          return store.dispatch(Actions.confirmAddLocation(response, 1))
        }, handleError)
        .catch(handleError)
      break
    case "REMOVE_LOCATION_FROM_USER":
      store.dispatch(Actions.removeLocationSent())
      headers.set("authorization", user.token)
      fetch(`${API_URL}/api/v1/plans/${action.payload.id}`, {...fetchParams, method: methods.DELETE, headers: headers })
        .then(handleResponse)
        .then(response => {
          store.dispatch(Actions.resetRemoveLocationSent())
          return store.dispatch(Actions.confirmRemoveLocation(response, -1))
        }, handleError)
        .catch(handleError)
      break
    default:
      break
  }
}