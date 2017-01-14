import { applyMiddleware, createStore } from 'redux'
import rootReducer from '../reducers/reducers'
import reduxThunk from 'redux-thunk'
import { dataService } from '../middleware/dataServiceMiddleware'
import { userStorage } from '../middleware/userStorageMiddleware'

const userDataFromBrowserStorage = {
  username: null,
  email: null,
  plans: [],
  loggedIn: false,
  coordinates: null,
  token: null
}
try {
  const keys = Object.keys(userDataFromBrowserStorage)
  keys.forEach(key => {
    userDataFromBrowserStorage[key] = localStorage.getItem(key)
  })
  // janky af!!
  if(userDataFromBrowserStorage.plans) {
    userDataFromBrowserStorage.plans = userDataFromBrowserStorage.plans.split("*")
  }
} catch(error) {
  console.error("There was an error fetching user data from storage", error)
}

const initialData = {
  user: {
    userName: null,
    email: null,
    plans: [],
    loggedIn: false,
    coordinates: null,
    token: null
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = composeEnhancers(applyMiddleware(dataService, userStorage, reduxThunk))

export default createStore(rootReducer, {...initialData, user: userDataFromBrowserStorage}, middleware)