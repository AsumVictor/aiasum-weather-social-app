const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SavedLocation = new Schema({
  user: {
    type: String,
  },
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
  country: {
    type: String,
  },
  city: {
    type: String,
  }
}, {timestamps: true})

module.exports = mongoose.model("SaveLocation", SavedLocation)