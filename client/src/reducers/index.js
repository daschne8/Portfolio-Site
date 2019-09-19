import {combineReducers} from 'redux'

import pageTracker from './pageTracker'
import projectsReducer from './projectsReducer'

const rootReducer = combineReducers({
  page: pageTracker,
  projects: projectsReducer
})

export default rootReducer
