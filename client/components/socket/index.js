import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { get } from 'lodash'

import { socketDidConnect, socketDidMount } from '../../redux/action-creators'

const serverUri = 'http://localhost:4000'

class Socket extends React.Component {
	static propTypes = {
		isConnected: PropTypes.string,
		socketDidConnect: PropTypes.func,
		socketDidMount: PropTypes.func,
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
		const socket = io(serverUri)  // eslint-disable-line no-undef

		this.props.socketDidMount({ socket })
		socket.on('connect', () => {
			this.props.socketDidConnect({ socket })
		})
	}
}

const mapStateToProps = ({ socket }) => ({
	isConnected: get(socket, 'connected') ? 'true' : 'false',
})
const mapDispatchToActionCreators = dispatch => bindActionCreators({
	socketDidMount,
	socketDidConnect,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToActionCreators)(Socket)
