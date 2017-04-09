import React, { PropTypes } from 'react'
import Head from 'next/head'
import { get } from 'lodash'

import withRedux from 'next-redux-wrapper'
import makeStore from '../redux/store'
import { SOCKET_DID_MOUNT, SOCKET_CONNECT } from '../redux/action-types'

const serverUri = 'http://localhost:4000'

class IndexPage extends React.Component {
	static propTypes = {
		dispatch: PropTypes.func,
		isConnected: PropTypes.string,
	}

	render() {
		return (
			<div>
				<Head>
					<script src={`${serverUri}/socket.io/socket.io.js`} />
				</Head>
				<div>Socket is connected: {this.props.isConnected}</div>
			</div>
		)
	}

	componentDidMount() {
		const { dispatch } = this.props
		const socket = io(serverUri)  // eslint-disable-line no-undef
		dispatch({ type: SOCKET_DID_MOUNT, payload: socket })
		socket.on('connect', () => {
			dispatch({ type: SOCKET_CONNECT, payload: socket })
		})
	}
}

const mapStateToProps = ({ socket }) => ({
	isConnected: get(socket, 'connected') ? 'true' : 'false',
})

export default withRedux(makeStore, mapStateToProps)(IndexPage)
