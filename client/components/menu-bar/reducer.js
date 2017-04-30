import {
  TOGGLE_MENU,
} from './action-types'
import { createReducer } from '../../redux/utils'

const initialState = {
  isMenuOpen: false,
}

export default createReducer(initialState, {
  [TOGGLE_MENU]: state => ({ ...state, isMenuOpen: !state.isMenuOpen }),
})
