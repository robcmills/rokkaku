import {
	CLOSE_USERNAME_MODAL,
	CREATE_USER,
	SET_USERNAME,
	SHOW_USERNAME_MODAL,
} from './action-types'
import { createReducer, getResolvedActionType } from '../../redux/utils'

const initialState = {
	username: null,
	isModalOpen: false,
}

export default createReducer(initialState, {
	[SET_USERNAME]: (state, { username }) => ({ ...state, username }),
	[getResolvedActionType(CREATE_USER)]: (state, { username }) => ({ ...state, username }),
	[SHOW_USERNAME_MODAL]: state => ({ ...state, isModalOpen: true }),
	[CLOSE_USERNAME_MODAL]: state => ({ ...state, isModalOpen: false }),
})
