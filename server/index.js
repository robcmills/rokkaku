const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.get('/', (req, res) => {
	res.send('<h1>Hello world, from server</h1>')
	// res.sendFile(__dirname + '/index.html')
})

io.on('connection', socket => {
	console.log('a user connected')
	console.log('socket.request.headers.cookie', socket.request.headers.cookie)
	console.log('socket.conn.remoteAddress', socket.conn.remoteAddress)

	socket.on('disconnect', () => {
		console.log('user disconnected')
	})
})

server.listen(4000, () => {
	console.log('The server is running: http://localhost:4000')
})
