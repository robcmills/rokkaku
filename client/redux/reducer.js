import { SET_USERNAME, SOCKET_DID_MOUNT, SOCKET_CONNECT } from './action-types'

const initialState = {
	socket: null,
	username: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case SOCKET_DID_MOUNT:
			return { ...state, socket: action.payload }
		case SOCKET_CONNECT:
			return { ...state, socket: action.payload }
		case SET_USERNAME:
			return { ...state, username: action.payload }
		default:
			return state
	}
}
