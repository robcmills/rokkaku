import fetchAction from './fetch-action'
import { CREATE_USER, SET_USERNAME } from './action-types'

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
