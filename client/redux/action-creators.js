import fetchAction from './fetch-action'
import { CREATE_USER, SET_USERNAME, SOCKET_DID_CONNECT, SOCKET_DID_MOUNT } from './action-types'

export const socketDidConnect = ({ socket }) => ({
	payload: { socket },
	type: SOCKET_DID_CONNECT,
})

export const socketDidMount = ({ socket }) => ({
	payload: { socket },
	type: SOCKET_DID_MOUNT,
})

export const createUser = username => fetchAction({
	data: { username },
	method: 'POST',
	type: CREATE_USER,
	url: '/api/users/create',
})

export const setUsername = username => ({
	payload: { username },
	type: SET_USERNAME,
})
