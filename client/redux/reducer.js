import { combineReducers } from 'redux'

import editor from '../components/editor/reducer'
import menu from '../components/menu-bar/reducer'
import user from '../components/user/reducer'

export default combineReducers({
  editor,
  menu,
  user,
})
