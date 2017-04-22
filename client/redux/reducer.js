import {
	CREATE_USER,
	SET_USERNAME,
	SOCKET_DID_MOUNT,
	SOCKET_DID_CONNECT,
} from './action-types'
import { getResolvedActionType } from './utils'

const initialState = {
	socket: null,
	username: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case SOCKET_DID_MOUNT:
			return { ...state, socket: action.payload.socket }
		case SOCKET_DID_CONNECT:
			return { ...state, socket: action.payload.socket }
		case SET_USERNAME:
			return { ...state, username: action.payload.username }
		case getResolvedActionType(CREATE_USER):
			return { ...state, username: action.payload.username }
		default:
			return state
	}
}
