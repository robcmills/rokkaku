import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import editor from '../components/editor/reducer'
import menu from '../components/menu-bar/reducer'
import user from '../components/user/reducer'

export default combineReducers({
  editor,
  form,
  menu,
  user,
})
