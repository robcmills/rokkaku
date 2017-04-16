import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// import { SET_USERNAME } from '../redux/action-types'
import { checkUsernameAvailable } from '../redux/action-creators'

const RK_USERNAME = 'RK_USERNAME'

class Username extends React.Component {
	static propTypes = {
		checkUsernameAvailable: PropTypes.func,
		// dispatch: PropTypes.func,
		// socket: PropTypes.object,
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
		// const { dispatch, socket } = this.props
		let username = this.props.username || localStorage.getItem(RK_USERNAME)
		if (!username) {
			username = this.getNewUsername()

			// dispatch({ type: SET_USERNAME, payload: username })
			// localStorage.setItem(RK_USERNAME, username)
			// socket.broadcast('')
		}
	}

	getNewUsername = () => {
		const username = prompt('Please enter a username:')
		this.props.checkUsernameAvailable(username).then(
			response => console.log('response', response),
			error => console.log('error', error)
		)
	}
}

const mapStateToProps = ({ socket, username }) => ({ socket, username })
const mapDispatchToActionCreators = dispatch => bindActionCreators({
	checkUsernameAvailable,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToActionCreators)(Username)
