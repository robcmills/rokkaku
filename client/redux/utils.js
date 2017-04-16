export function getResolvedActionType(actionType) {
	return `${actionType}_RESOLVED`
}

export function getRejectedActionType(actionType) {
	return `${actionType}_REJECTED`
}
