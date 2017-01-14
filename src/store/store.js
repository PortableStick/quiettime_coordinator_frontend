import { applyMiddleware, createStore } from 'redux'
import rootReducer from '../reducers/reducers'
import reduxThunk from 'redux-thunk'
import { dataService } from '../middleware/dataServiceMiddleware'

// get user data from browser storage
const userDataFromBrowserStorage = {
  username: null,
  email: null,
  plans: [],
  loggedIn: false,
  coordinates: null
}

const initialData = {
  user: {
    userName: null,
    email: null,
    plans: [],
    loggedIn: false
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = composeEnhancers(applyMiddleware(dataService, reduxThunk))

export default createStore(rootReducer, {...initialData, user: userDataFromBrowserStorage}, middleware)