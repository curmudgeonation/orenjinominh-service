require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const database = require('../database/index.js');
const fetchFromDB = database.find;

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser());

app.get('/similarprops', function (req, res) {

  // fetchFromDB((err, data) => {
  //   if (err) {
  //     res.status(404);
  //   } else {
  //     res.status(200).send(data);
  //   }
  // });

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
