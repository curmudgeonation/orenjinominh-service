const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const similarPropertiesSchema = new mongoose.Schema({
  propertyID: Number,
  assets: [String],
  location: String,
  typeOfRoom: String,
  totalBeds: Number,
  headline: String,
  pricing: Number,
  rating: Number,
  reviews: Number
});

const similarProperties = mongoose.model('Similar Properties', similarPropertiesSchema);



module.exports = similarProperties;