import { applyMiddleware, createStore } from 'redux'
import rootReducer from '../reducers/reducers'
import reduxThunk from 'redux-thunk'
import { dataService } from '../middleware/dataServiceMiddleware'

// get user data from browser storage
const userDataFromBrowserStorage = {
  userName: null,
  email: null,
  plans: [],
  loggedIn: false
}

const initialData = {
  user: {
    userName: null,
    email: null,
    plans: [],
    loggedIn: false
  }
}

const middleware = applyMiddleware(dataService, reduxThunk)

export default createStore(rootReducer, {...initialData, user: userDataFromBrowserStorage}, middleware)