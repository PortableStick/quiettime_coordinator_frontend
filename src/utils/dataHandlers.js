import store from '../store/store'
import { reportServerError } from '../actions/actions'
export function handleResponse(response){
  if(response.ok) {
    return response.json()
  } else {
    throw {status: response.status, message: response.statusText}
  }
}

export function handleError(error) {
  store.dispatch(reportServerError(error))
}