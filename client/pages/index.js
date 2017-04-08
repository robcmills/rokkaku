import React from 'react'
import Head from 'next/head'
import {get} from 'lodash'

import {applyMiddleware, compose, createStore} from 'redux'
import logger from 'redux-logger'
import withRedux from 'next-redux-wrapper'

import {SOCKET_DID_MOUNT, SOCKET_CONNECT} from './action-types'

const initialState = {
	socket: null,
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SOCKET_DID_MOUNT:
			return {...state, socket: action.payload}
		case SOCKET_CONNECT:
			return {...state, socket: action.payload}
		default:
			return state
	}
}

const middlewares = []

if (process.env.NODE_ENV !== 'production') {
	const { logger } = require('redux-logger')
	middlewares.push(logger)
}

const makeStore = initialState => {
	return compose(applyMiddleware(...middlewares))(createStore)(reducer)
}

const serverUri = 'http://localhost:4000'

class IndexPage extends React.Component {
	componentDidMount() {
		const {dispatch} = this.props
		const socket = io(serverUri)
		dispatch({type: SOCKET_DID_MOUNT, payload: socket})
		socket.on('connect', () => {
			dispatch({type: SOCKET_CONNECT, payload: socket})
		})
	}

	render() {
		return (
			<div>
				<Head>
					<script src={`${serverUri}/socket.io/socket.io.js`}></script>
				</Head>
				<div>Socket is connected: {this.props.isConnected}</div>
			</div>
		)
	}
}

const mapStateToProps = ({ socket }) => ({
	isConnected: get(socket, 'connected') ? 'true' : 'false',
})

export default withRedux(makeStore, mapStateToProps)(IndexPage)
