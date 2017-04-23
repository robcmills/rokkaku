const P = require('bluebird')
const Model = require('./model')

module.exports = router => {
  router.get('/users', (req, res) => {
    Model.find({}, (err, data) => {
      if (err) {
        console.log(err)
        return res.status(500).json({ msg: 'Internal server error' })
      }
      res.json(data)
    })
  })

  router.get('/users/:username', (req, res) => {
    Model.find({ username: req.params.username }, (err, data) => {
      if (err) {
        console.log(err)
        return res.status(500).json({ msg: 'Internal server error' })
      }
      res.json(data)
    })
  })

  router.post('/users/create', P.coroutine(function* createUser(req, res) {
    console.log('req.body', req.body)
    const existingUser = yield Model.findOne({ username: req.body.username })
    console.log('existingUser', existingUser)
    if (existingUser) {
      return res.status(409).send('Username already exists')
    }
    const newUser = new Model(req.body)
    yield newUser.save()
    return res.json(newUser)
  }))
}
