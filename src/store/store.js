import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers/reducers';
import reduxThunk from 'redux-thunk';
import { dataService } from '../middleware/dataServiceMiddleware';

// get user data from browser storage
const userDataFromBrowserStorage = {
  userName: "BillBob",
  email: "a@b.com",
  plans: ["1", "2", "3"]
};

const initialData = {
  user: {
    userName: null,
    email: null,
    plans: []
  }
};

const middleware = applyMiddleware(dataService, reduxThunk);

export default createStore(rootReducer, {...initialData, user: userDataFromBrowserStorage}, middleware);