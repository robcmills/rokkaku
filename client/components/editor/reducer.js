import {
  CREATE_BOARD,
} from './action-types'
import { createReducer, getResolvedActionType } from '../../redux/utils'

const initialState = {
  currentBoard: null,
  boardsById: null,
}

export default createReducer(initialState, {
  [getResolvedActionType(CREATE_BOARD)]: (state, { board }) => ({
    ...state,
    currentBoard: board,
  }),
})
