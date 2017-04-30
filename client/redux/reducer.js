import { combineReducers } from 'redux'

import menu from '../components/menu-bar/reducer'
import user from '../components/user/reducer'

export default combineReducers({
	menu,
  user,
})
