import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {}

const middleware = [thunk]

const myStore = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default myStore