import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'

import reducer from './reducer'

const middlewares = []

if (process.env.NODE_ENV !== 'production') {
	middlewares.push(logger)
}

export default () => {
	return compose(applyMiddleware(...middlewares))(createStore)(reducer)
}
