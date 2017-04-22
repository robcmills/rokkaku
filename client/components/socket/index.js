import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { connect } from 'react-redux'
import { get } from 'lodash'

import bindEvents from './bind-events'

const serverUri = 'http://localhost:4000'

class Socket extends React.Component {
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
		bindEvents({ dispatch, socket })
	}
}

const mapStateToProps = ({ socket }) => ({
	isConnected: get(socket, 'connected') ? 'true' : 'false',
})

export default connect(mapStateToProps)(Socket)
