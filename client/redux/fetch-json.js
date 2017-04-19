import P from 'bluebird'
import fetch from 'isomorphic-fetch'

const SERVER_URI = 'http://localhost:4000'

const checkStatus = P.coroutine(function* checkStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response
	}
	const error = new Error(yield response.text())
	error.response = response
	throw error
})

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

	return new P((resolve, reject) => {
		fetch(SERVER_URI + url, options)
			.then(checkStatus)
			.then(parseJSON)
			.then(resolve)
			.catch(reject)
	})
}
