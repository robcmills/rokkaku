import React from 'react'
import Head from 'next/head'

const serverUri = 'http://localhost:4000'

export default class extends React.Component {
	componentDidMount() {
		const socket = io(serverUri)
		console.log('socket', socket)
	}

	render() {
		return (
			<div>
				<Head>
					<script src={`${serverUri}/socket.io/socket.io.js`}></script>
				</Head>
			</div>
		)
	}
}
