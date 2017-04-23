import {
  SOCKET_DID_CONNECT,
  SOCKET_DID_MOUNT,
} from './action-types'

export const socketDidConnect = ({ socket }) => ({
  payload: socket,
  type: SOCKET_DID_CONNECT,
})

export const socketDidMount = ({ socket }) => ({
  payload: socket,
  type: SOCKET_DID_MOUNT,
})
