import store from '../store/store'
import { reportLocalStorageError } from '../actions/actions'

export const userStorage = store => next => action => {
  next(action)
  switch(action.type) {
    case "PERSIST_USER_DATA":
      try {
        const { username, email, token, plans, loggedIn, coordinates, id } = action.payload.user
        localStorage.setItem('username', username)
        localStorage.setItem('email', email)
        localStorage.setItem('token', token)
        localStorage.setItem('plans', plans.join('*'))
        localStorage.setItem('loggedIn', "true")
        localStorage.setItem('id', id)
      } catch(error) {
        store.dispatch(reportLocalStorageError(error))
      }
      break
    case "PERSIST_USER_COORDINATES":
      try {
        localStorage.setItem('coordinates', action.payload)
      } catch(error) {
        store.dispatch(reportLocalStorageError(error))
      }
      break
    case "PERSIST_USER_LOGGEDIN":
      try {
        localStorage.setItem('loggedIn', action.payload)
      } catch(error) {
        store.dispatch(reportLocalStorageError(error))
      }
      break
    case "CLEAR_USER_DATA":
    console.log("Clearing user data")
      localStorage.clear()
      break
    default:
      break
  }
}