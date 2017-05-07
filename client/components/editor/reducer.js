import {
  CREATE_BOARD,
  CREATE_NEW_BOARD,
} from './action-types'
import { createReducer, getResolvedActionType } from '../../redux/utils'
import defaultBoard from '../board/default'

const initialState = {
  currentBoard: null,
  boardsById: null,
}

export default createReducer(initialState, {
  [getResolvedActionType(CREATE_BOARD)]: (state, { board }) => ({
    ...state,
    currentBoard: board,
  }),
  [CREATE_NEW_BOARD]: state => ({
    ...state,
    currentBoard: defaultBoard,
  }),
})
