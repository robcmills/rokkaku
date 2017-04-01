import React from 'react'
import Head from 'next/head'

export default class extends React.Component {
	componentDidMount() {
		const socket = io('http://localhost:4000')
		console.log('socket', socket)
	}
	render() {
		return (
			<div>
				<Head>
					<script src="http://localhost:4000/socket.io/socket.io.js"></script>
				</Head>
			</div>
		)
	}
}
