import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { noop } from 'lodash'

import {
	closeUsernameModal,
	createUser,
	setUsername,
	showUsernameModal,
} from './action-creators'

import Modal from './modal'

const RK_USERNAME = 'RK_USERNAME'

class Username extends React.Component {
	static propTypes = {
		closeUsernameModal: PropTypes.func,
		createUser: PropTypes.func,
		isModalOpen: PropTypes.bool,
		// socket: PropTypes.object,
		showUsernameModal: PropTypes.func,
		setUsername: PropTypes.func,
		username: PropTypes.string,
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
		this.props.showUsernameModal()
		// username = this.getNewUsername()
		// if (username) {
		// 	localStorage.setItem(RK_USERNAME, username)
		// 	// socket.broadcast(username + ' connected')
		// }
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

	handleCloseModal = () => this.props.closeUsernameModal()

	render() {
		return (
			<div>
				Username: {this.props.username}
				<Modal
					isOpen={this.props.isModalOpen}
					onCancel={this.handleCloseModal}
				/>
			</div>
		)
	}
}

const mapStateToProps = ({ user }) => ({ ...user })
const mapDispatchToActionCreators = dispatch => bindActionCreators({
	closeUsernameModal,
	createUser,
	setUsername,
	showUsernameModal,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToActionCreators)(Username)
