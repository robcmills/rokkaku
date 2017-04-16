import Promise from 'bluebird'

import fetchJson from './fetch-json'
import { getResolvedActionType, getRejectedActionType } from './utils'

export default function fetchAction({
	data,
	type,
	...fetchArgs,
}) {
	return dispatch => {
		dispatch({
			type,
			payload: data,
		})

		return fetchJson({ ...fetchArgs, data })
			.then(
				response => {
					dispatch({
						type: getResolvedActionType(type),
						payload: response,
					})
					return Promise.resolve(response)
				},
				error => {
					dispatch({
						type: getRejectedActionType(type),
						payload: error,
					})
					return Promise.reject(error)
				},
			)
	}
}
