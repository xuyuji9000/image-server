import { applyMiddleware, createStore } from 'redux'

import reducer from './rootReducer'

import logger from 'redux-logger'

// middleware
const middleware = applyMiddleware(logger)

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), middleware)

export default store
