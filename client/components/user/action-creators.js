import fetchAction from '../../redux/fetch-action'
import {
	CLOSE_USERNAME_MODAL,
	CREATE_USER,
	SET_ERROR_TEXT,
	SET_USERNAME,
	SHOW_USERNAME_MODAL,
} from './action-types'

export const createUser = username => fetchAction({
	data: { username },
	method: 'POST',
	type: CREATE_USER,
	url: '/api/users/create',
})

export const setErrorText = errorText => ({
	payload: { errorText },
	type: SET_ERROR_TEXT,
})

export const setUsername = username => ({
	payload: { username },
	type: SET_USERNAME,
})

export const showUsernameModal = () => ({
	type: SHOW_USERNAME_MODAL,
})

export const closeUsernameModal = () => ({
	type: CLOSE_USERNAME_MODAL,
})
