import React from 'react'
import PropTypes from 'prop-types'
import 'babel-polyfill'

import withRedux from 'next-redux-wrapper'
import makeStore from '../redux/store'

import Mui from '../components/mui'
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
	static propTypes = {
		userAgent: PropTypes.string,
	}

	static getInitialProps({ req }) {
		const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
		const isServer = !!req
		return { isServer, userAgent }
	}

	render() {
		return (
			<Mui userAgent={this.props.userAgent}>
				<div style={reset}>
					<h1>Index Page</h1>
					<Socket />
					<Username />
				</div>
			</Mui>
		)
	}
}

export default withRedux(makeStore)(IndexPage)
