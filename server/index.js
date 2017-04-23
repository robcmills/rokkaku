const mongoose = require('mongoose')
const app = require('express')()
const cors = require('cors')
const bodyparser = require('body-parser')
const apiRouter = require('./api/router')

const DB_URI = process.env.DB_URI || 'localhost:27018/rokkaku'
const PORT = process.env.PORT || 4000

mongoose.connect(DB_URI)
mongoose.connection.on('error', console.log)

app.use(cors())
app.use(bodyparser.json())
app.use('/api', apiRouter)

app.get('/', (req, res) => {
  res.send('<h1>Hello world, from server</h1>')
  // res.sendFile(__dirname + '/index.html')
})

const server = app.listen(PORT, 'localhost', err => {
  if (err) {
    console.log(err)
    return
  }
  console.log(`Server listening on port: ${PORT}`)
})

const io = require('socket.io')(server)

io.on('connection', socket => {
  console.log('a user connected')
  console.log('socket.request.headers.cookie', socket.request.headers.cookie)
  console.log('socket.conn.remoteAddress', socket.conn.remoteAddress)

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

