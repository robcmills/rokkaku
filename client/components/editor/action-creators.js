import fetchAction from '../../redux/fetch-action'
import {
  CREATE_BOARD,
  CREATE_NEW_BOARD,
  SELECT_HEX_TYPE,
  TOGGLE_MENU,
  UPDATE_BOARD,
} from './action-types'

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
})

export const createBoard = ({ username }) => fetchAction({
  data: { username },
  method: 'POST',
  type: CREATE_BOARD,
  url: '/api/boards/create',
})

export const createNewBoard = () => ({
  type: CREATE_NEW_BOARD,
})

export const selectHexType = hexType => ({
  payload: hexType,
  type: SELECT_HEX_TYPE,
})

export const updateBoard = updates => ({
  payload: updates,
  type: UPDATE_BOARD,
})
