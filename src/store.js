import { applyMiddleware, createStore } from 'redux'

import reducer from './rootReducer'

import logger from 'redux-logger'

// middleware
const middleware = applyMiddleware(logger())

export default createStore(reducer, middleware)
