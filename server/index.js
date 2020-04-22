require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const database = require('../database/index.js');
const fetchFromDB = database.find;

const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));


app.get('/similarprops', function (req, res) {

  try {
    fetchFromDB((results) => {
      res.status(200);
      res.send(results);
    });
  } catch (err) {
    console.log('Error getting properties from db: ', err);
  }
});


const port = process.env.PORT || 2000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
