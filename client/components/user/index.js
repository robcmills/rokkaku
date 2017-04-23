import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  closeUsernameModal,
  createUser,
  setErrorText,
  setUsername,
  showUsernameModal,
} from './action-creators'

import Modal from './modal'

const RK_USERNAME = 'RK_USERNAME'

class Username extends React.Component {
  static propTypes = {
    closeUsernameModal: PropTypes.func,
    createUser: PropTypes.func,
    errorText: PropTypes.string,
    isModalOpen: PropTypes.bool,
    // socket: PropTypes.object,
    setErrorText: PropTypes.func,
    setUsername: PropTypes.func,
    showUsernameModal: PropTypes.func,
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
  }

  handleCancel = () => {
    this.props.setUsername(null)
    this.props.closeUsernameModal()
  }

  handleChange = (event, newValue) => {
    this.props.setUsername(newValue)
  }

  handleSubmit = () => {
    const { username } = this.props
    this.props.createUser(username).then(
      () => {
        this.props.closeUsernameModal()
        localStorage.setItem(RK_USERNAME, username)
        // socket.broadcast(username + ' connected')
      },
      error => {
        if (error.response.status === 409) {
          this.props.setErrorText(
            `"${username}" is not available. Please enter another username.`
          )
        }
      }
    )
  }

  render() {
    return (
      <div>
        Username: {this.props.username}
        <Modal
          errorText={this.props.errorText}
          isOpen={this.props.isModalOpen}
          onCancel={this.handleCancel}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          username={this.props.username}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({ ...user })
const mapDispatchToActionCreators = dispatch => bindActionCreators({
  closeUsernameModal,
  createUser,
  setErrorText,
  setUsername,
  showUsernameModal,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToActionCreators)(Username)
