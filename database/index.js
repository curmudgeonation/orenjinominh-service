const mongoose = require('mongoose');
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/similarProperties';

const db = mongoose.connect(mongoUri);

const similarProperties = require('./similarProperties.js');

let find = (cb) => {
  similarProperties.find({})
    .limit(12)
    .exec((err, res) => {
      if (err) {
        console.log('Error retrieving properties from database.');
        cb(err);
      } else {
        cb(res);
      }
    });
};

module.exports.db = db;
module.exports.find = find;