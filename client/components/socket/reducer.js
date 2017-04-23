import {
  SOCKET_DID_MOUNT,
  SOCKET_DID_CONNECT,
} from './action-types'
import { createReducer } from '../../redux/utils'

const initialState = null

export default createReducer(initialState, {
  [SOCKET_DID_MOUNT]: (state, socket) => ({ ...socket }),
  [SOCKET_DID_CONNECT]: (state, socket) => ({ ...socket }),
})
