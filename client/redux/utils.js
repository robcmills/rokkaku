export function getResolvedActionType(actionType) {
  return `${actionType}_RESOLVED`
}

export function getRejectedActionType(actionType) {
  return `${actionType}_REJECTED`
}

export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action = {}) {
    const handler = handlers[action.type]
    return handler
      ? handler(state, action.payload, action)
      : state
  }
}
