import { SOCKET_DID_MOUNT, SOCKET_CONNECT } from '../../redux/action-types'

export default ({ dispatch, socket }) => {
	dispatch({ type: SOCKET_DID_MOUNT, payload: socket })

	socket.on('connect', () => {
		dispatch({ type: SOCKET_CONNECT, payload: socket })
	})
}
