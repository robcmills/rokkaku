import React, { PropTypes } from 'react'
import 'babel-polyfill'

import withRedux from 'next-redux-wrapper'
import makeStore from '../redux/store'
import Socket from '../components/socket/'
import Username from '../components/username'

class IndexPage extends React.Component {
	static propTypes = {
		dispatch: PropTypes.func,
	}

	render() {
		return (
			<div>
				<h1>Index Page</h1>
				<Socket dispatch={this.props.dispatch} />
				<Username dispatch={this.props.dispatch} />
			</div>
		)
	}
}

export default withRedux(makeStore)(IndexPage)
