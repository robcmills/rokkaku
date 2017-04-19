import fetchAction from './fetch-action'
import { CREATE_USER } from './action-types'

export const createUser = username => fetchAction({
	data: { username },
	method: 'POST',
	type: CREATE_USER,
	url: '/api/users/create',
})
