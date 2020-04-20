const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const similarPropertiesSchema = new mongoose.Schema({
  propertyID: Number,
  photos: [String],
  location: String,
  typeOfRoom: String,
  totalBeds: Number,
  nameOfProperty: String,
  pricing: Number,
  rating: Number,
  reviews: Number
});

const similarProperties = mongoose.model('Similar Properties', similarPropertiesSchema);

module.exports = similarProperties;