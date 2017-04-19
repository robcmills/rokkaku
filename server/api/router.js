const express = require('express')

const router = express.Router()

require('./users/routes')(router)

module.exports = router
