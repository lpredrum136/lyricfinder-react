import { combineReducers } from 'redux'
import trackReducer from './trackReducer'

const rootReducer = combineReducers({
  myTrack: trackReducer
})

export default rootReducer
