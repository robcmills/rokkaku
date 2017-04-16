import Promise from 'bluebird'
import fetch from 'isomorphic-fetch'

function checkStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response
	}
	const error = new Error(response.statusText)
	error.response = response
	throw error
}

function parseJSON(response) {
	return response.json()
}

export default function fetchJson({
	data,
	method,
	url,
}) {
	const options = {
		method,
	}

	if (data) {
		options.body = method === 'GET' ? data : JSON.stringify(data)

		if (method !== 'GET') {
			options.headers = { 'Content-Type': 'application/json; charset=utf-8' }
		}
	}

	return new Promise((resolve, reject) => {
		fetch(url, options)
			.then(checkStatus)
			.then(parseJSON)
			.then(response => resolve(response))
			.catch(error => reject(error))
	})
}
