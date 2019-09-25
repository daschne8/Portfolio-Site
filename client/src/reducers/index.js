import {combineReducers} from 'redux'

import pageTracker from './pageTracker'
import projectsReducer from './projectsReducer'
import emailReducer from './emailReducer'

const rootReducer = combineReducers({
  page: pageTracker,
  projects: projectsReducer,
  email: emailReducer
})

export default rootReducer
