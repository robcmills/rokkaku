import React from 'react'
import PropTypes from 'prop-types'
import io from 'socket.io-client'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { get } from 'lodash'

import { socketDidConnect, socketDidMount } from './action-creators'

const serverUri = 'http://localhost:4000'

class Socket extends React.Component {
  static propTypes = {
    socket: PropTypes.object,
    socketDidConnect: PropTypes.func,
    socketDidMount: PropTypes.func,
  }

  render() {
    return (
      <div>
        <div>Socket is connected: {get(this.props.socket, 'connected') ? 'true' : 'false'}</div>
        {this.props.children}
      </div>
    )
  }

  componentDidMount() {
    this.socket = io(serverUri)

    this.props.socketDidMount(socket)
    socket.on('connect', () => {
      this.props.socketDidConnect(socket)
      socket.emit('user connected', this.props.username)
    })
  }
}

const mapStateToProps = ({ socket, user }) => ({ socket, ...user })
const mapDispatchToActionCreators = dispatch => bindActionCreators({
  socketDidMount,
  socketDidConnect,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToActionCreators)(Socket)
