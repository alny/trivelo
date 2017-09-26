import { combineReducers, applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import { accountReducer, categoryReducer, navbarReducer } from '../reducers'

var store;

export default {

  configureStore: (initial) => {

      const reducers = combineReducers({
        account: accountReducer,
        category: categoryReducer,
        navbar: navbarReducer
      })

      store = createStore(
        reducers,
        initial,
        applyMiddleware(thunk)
      )
      return store
  },

  currentStore: () => {
    return store
  }
}
