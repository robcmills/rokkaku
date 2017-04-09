import { SOCKET_DID_MOUNT, SOCKET_CONNECT } from './action-types'

const initialState = {
	socket: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case SOCKET_DID_MOUNT:
			return { ...state, socket: action.payload }
		case SOCKET_CONNECT:
			return { ...state, socket: action.payload }
		default:
			return state
	}
}
