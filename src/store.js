import { applyMiddleware, createStore } from 'redux'

import reducer from './rootReducer'

import logger from 'redux-logger'

// middleware
const store = createStore(reducer)

export default store
