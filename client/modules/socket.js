import io from 'socket.io-client'

const serverUri = 'http://localhost:4000'

let socket

if (!socket) {
	socket = io(serverUri)
}

export default socket
