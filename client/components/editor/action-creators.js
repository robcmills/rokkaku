import fetchAction from '../../redux/fetch-action'
import {
  CREATE_BOARD,
  CREATE_NEW_BOARD,
} from './action-types'

export const createBoard = ({ username }) => fetchAction({
  data: { username },
  method: 'POST',
  type: CREATE_BOARD,
  url: '/api/boards/create',
})

export const createNewBoard = () => ({
  type: CREATE_NEW_BOARD,
})
