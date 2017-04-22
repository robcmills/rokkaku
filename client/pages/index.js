import React from 'react'
import PropTypes from 'prop-types'
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
	static propTypes = {
		dispatch: PropTypes.func,
	}

	render() {
		return (
			<div style={reset}>
				<h1>Index Page</h1>
				<Socket dispatch={this.props.dispatch} />
				<Username dispatch={this.props.dispatch} />
			</div>
		)
	}
}

export default withRedux(makeStore)(IndexPage)
