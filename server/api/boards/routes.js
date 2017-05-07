const P = require('bluebird')
const Model = require('./model')

module.exports = router => {
  router.get('/boards', (req, res) => {
    Model.find({}, (err, data) => {
      if (err) {
        console.log(err)
        return res.status(500).json({ msg: 'Internal server error' })
      }
      res.json(data)
    })
  })

  router.get('/boards/:id', (req, res) => {
    Model.find({ _id: req.params.id }, (err, data) => {
      if (err) {
        console.log(err)
        return res.status(500).json({ msg: 'Internal server error' })
      }
      res.json(data)
    })
  })

  router.post('/boards/create', P.coroutine(function* createBoard(req, res) {
    console.log('req.body', req.body)
    const newBoard = new Model(req.body)
    yield newBoard.save()
    return res.json(newBoard)
  }))
}
