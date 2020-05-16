require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');

const similarProperties = require('../database/similarProperties.js');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// gets module
app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});

// gets all properties
app.get('/similarprops', function(req, res, next = () => {}) {

  similarProperties.find({}).exec((err, data) => {
    if (err) {
      return console.error(err);
    }
    res.status(200).json(data);
    next();
  });
});


//send Listing and Assets metadata to local db
app.post('/similarprops', function (req, res, next = () => {}) {

  const requestListings = axios.get(`http://localhost:3005/listings/metadata/all`);
  const requestAssets = axios.get(`http://localhost:5000/listings/`);

  axios.all([requestListings, requestAssets])
    .then(axios.spread((...responses) => {
      const requestListingsRes = responses[0];
      const requestAssetsRes = responses[1];

      let listingData = requestListingsRes.data;

      for (let x = 0; x < listingData.length; x++) {
        let singlePropToInsert = listingData[x];
        similarProperties.updateOne({'listingId': singlePropToInsert.listingId}, {
          'listingId': singlePropToInsert.listingId,
          'location' : singlePropToInsert.location,
          'typeOfRoom': singlePropToInsert.typeOfRoom,
          'totalBeds': singlePropToInsert.totalBeds,
          'price': singlePropToInsert.price,
          'stars': singlePropToInsert.stars
        }, {upsert: true})
        // .insertMany(requestListingsRes.data)
          .then(result => {
            // console.log("insert result:", result);
          })
          .catch(err => {
            console.error('Error posting Listing metadata', err);
          });
      };


      getURLS = function(array) {
        let allPhotos = [];

        for (let i = 0; i < array.length; i++) {
          let photos = array[i].assets;
          oneListingPhotos = [];
          for (let j = 0; j < photos.length; j++) {
            oneListingPhotos.push(photos[j].url);
          }
          allPhotos.push(oneListingPhotos);
        };

        return allPhotos;
      };

      let listingAssets = getURLS(requestAssetsRes.data);

      listingAssets.forEach(urlArray => {
        similarProperties.updateMany({}, {$set: {'assets': urlArray}}, {upsert: true})
          .then(result => {
            // console.log("insert assets result:", result);
          })
          .catch(err => {
            console.error('Error posting Listing metadata', err);
          });
      });
    }))
    .catch(err => {
      console.log(err);
    });

  res.status(201).end();
  next();
});

// gets 12 similar properties (& assets) from local db based on Listing ID

app.get('/listings/:id/similarprops', function (req, res, next = () => {}) {
  console.log('inside server get 12');
  // query local db for specific listing's location
  axios.get(`http://localhost:3005/listings/${req.params.id}`)
    .then(listings => {

      similarProperties.find({'location': listings.data.location})
      .limit(12)
      .exec((err, listings) => {
        if (err) {
          return console.log(err);
        }
        console.log('listings here: ', listings);
        res.status(200).json(listings);
        next();
      });
    })
    .catch(err => {
      console.error('Could not retrieve & update 12 similar properties!', err);
    });
});



module.exports = app;



