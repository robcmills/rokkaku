import React from 'react'
import 'babel-polyfill'

import withRedux from 'next-redux-wrapper'
import makeStore from '../redux/store'
import Socket from '../components/socket/'
import Username from '../components/username'

const reset = {
	position: 'absolute',
	bottom: 0,
	left: 0,
	right: 0,
	top: 0,
}

class IndexPage extends React.Component {
	static getInitialProps({ req }) {
		const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
		const isServer = !!req
		return { isServer, userAgent }
	}

	render() {
		return (
			<div style={reset}>
				<h1>Index Page</h1>
				<Socket />
				<Username />
			</div>
		)
	}
}

export default withRedux(makeStore)(IndexPage)
