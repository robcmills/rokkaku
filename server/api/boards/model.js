const mongoose = require('mongoose')

const BoardSchema = mongoose.Schema({
  createdBy: { type: String },
  description: { type: String },
  elements: [],
  height: { type: Number },
  hexes: [],
  name: { type: String, unique: true },
  offset: { type: Number },
  shapes: [],
  width: { type: Number },
})

module.exports = mongoose.model('Board', BoardSchema)
