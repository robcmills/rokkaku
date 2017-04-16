import fetchAction from './fetch-action'
import { CHECK_USERNAME_AVAILABLE } from './action-types'

export const checkUsernameAvailable = username => fetchAction({
	data: { username },
	method: 'POST',
	type: CHECK_USERNAME_AVAILABLE,
	url: '/api/user/check-username',
})
