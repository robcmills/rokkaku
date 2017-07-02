import {
  CREATE_BOARD,
  CREATE_NEW_BOARD,
  SELECT_HEX_TYPE,
  TOGGLE_MENU,
  UPDATE_BOARD,
} from './action-types'
import { createReducer, getResolvedActionType } from '../../redux/utils'
import defaultBoard from '../board/default'

const initialState = {
  currentBoard: null,
  boardsById: null,
  isMenuOpen: true,
  selectedHexType: null,
}

export default createReducer(initialState, {
  [TOGGLE_MENU]: state => ({
    ...state,
    isMenuOpen: !state.isMenuOpen,
  }),
  [getResolvedActionType(CREATE_BOARD)]: (state, { board }) => ({
    ...state,
    currentBoard: board,
  }),
  [CREATE_NEW_BOARD]: state => ({
    ...state,
    currentBoard: defaultBoard,
  }),
  [SELECT_HEX_TYPE]: (state, hexType) => ({
    ...state,
    selectedHexType: hexType,
  }),
  [UPDATE_BOARD]: (state, updates) => ({
    ...state,
    currentBoard: {
      ...state.currentBoard,
      ...updates,
      isChanged: true,
    },
  })
})
