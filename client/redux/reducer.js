import { combineReducers } from 'redux'

import socket from '../components/socket/reducer'
import user from '../components/user/reducer'

export default combineReducers({
  socket,
  user,
})
