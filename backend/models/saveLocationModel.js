const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SavedLocation = new Schema({
  user: {
    type: String,
    required: true, 
  },
  latitude: {
    type: String,
    required: true, 
  },
  longitude: {
    type: String,
    required: true, 
  },
  location: {
    type: String,
    required: true, 
  }
}, {timestamps: true})

module.exports = mongoose.model("SaveLocation", SavedLocation)