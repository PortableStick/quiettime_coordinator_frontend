import fetch from 'isomorphic-fetch'
import { methods } from '../constants/methods'
import { API_URL } from '../config/config'
import { handleResponse, handleError } from '../utils/dataHandlers'
import * as Actions from '../actions/actions'

export const searchData = store => next => action => {
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
    case "SEND_UNAUTHENTICATED_SEARCH_DATA":
      store.dispatch(Actions.searchDataSent())
      fetch(`${API_URL}/api/v1/searches`, {...fetchParams, method: methods.POST, body: action.payload})
        .then(handleResponse)
        .then(results => {
          store.dispatch(Actions.resetSearchDataSent())
          return store.dispatch(Actions.receiveSearchResults(results))
        }, handleError)
        .catch(handleError)
      break
    case "SEND_AUTHENTICATED_SEARCH_DATA":
      store.dispatch(Actions.searchDataSent())
      headers.set("authorization", user.token)
      fetch(`${API_URL}/api/v1/searches`, {...fetchParams, method: methods.POST, body: action.payload, headers: headers})
        .then(handleResponse)
        .then(results => {
          store.dispatch(Actions.resetSearchDataSent())
          return store.dispatch(Actions.receiveSearchResults(results))
        }, handleError)
        .catch(handleError)
      break
    default:
      break
  }
}