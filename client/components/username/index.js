import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { noop } from 'lodash'

import { createUser, setUsername } from '../../redux/action-creators'

const RK_USERNAME = 'RK_USERNAME'

class Username extends React.Component {
	static propTypes = {
		createUser: PropTypes.func,
		// socket: PropTypes.object,
		setUsername: PropTypes.func,
		username: PropTypes.string,
	}

	render() {
		return (
			<div>
				Username: {this.props.username}
			</div>
		)
	}

	componentDidMount() {
		let username = this.props.username
		if (username) {
			return
		}
		username = localStorage.getItem(RK_USERNAME)
		if (username) {
			this.props.setUsername(username)
			return
		}
		username = this.getNewUsername()
		if (username) {
			localStorage.setItem(RK_USERNAME, username)
			// socket.broadcast(username + ' connected')
		}
	}

	getNewUsername = (promptMsg = 'Please enter a username:') => {
		const username = prompt(promptMsg)
		if (!username) {
			return null
		}
		this.props.createUser(username).then(
			noop,
			error => {
				if (error.response.status === 409) {
					this.getNewUsername(
						`"${username}" is not available. Please enter another username:`
					)
				}
			}
		)
		return username
	}
}

const mapStateToProps = ({ socket, username }) => ({ socket, username })
const mapDispatchToActionCreators = dispatch => bindActionCreators({
	createUser,
	setUsername,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToActionCreators)(Username)
