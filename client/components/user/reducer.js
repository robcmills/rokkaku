import {
  CLOSE_USERNAME_MODAL,
  CREATE_USER,
  SET_ERROR_TEXT,
  SET_USERNAME,
  SHOW_USERNAME_MODAL,
} from './action-types'
import { createReducer, getResolvedActionType } from '../../redux/utils'

const initialState = {
  errorText: null,
  isModalOpen: false,
  username: null,
}

export default createReducer(initialState, {
  [SET_ERROR_TEXT]: (state, { errorText }) => ({ ...state, errorText }),
  [SET_USERNAME]: (state, { username }) => ({ ...state, username }),
  [getResolvedActionType(CREATE_USER)]: (state, { username }) => ({ ...state, username }),
  [SHOW_USERNAME_MODAL]: state => ({ ...state, isModalOpen: true }),
  [CLOSE_USERNAME_MODAL]: state => ({ ...state, errorText: null, isModalOpen: false }),
})
