const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
// const seedData = require("./seed");
app.use(express.static('dist'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

var mongoose = require('mongoose');

app.get('/getData', (req, res) => {
  // res.send('Hello World! it;s 6:30 pm Monday July8th')

  mongoose.connect('mongodb://localhost/FEC', {useNewUrlParser: true});

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('mongo is connected')

    var rentalSchema = new mongoose.Schema({
      entireRental: {
        numOfGuest: String,
        numOfBedroom: Number,
        numOfBeds: Number,
        numOfBathroom: Number
      },
      hostInfo: {
          name: String, 
          superhost: Boolean
        },
      quickDetail: { 
        recentSparklingCleanVotes: Number, 
        checkInRating: Number, 
        selfCheckin_lockBox: Boolean,
        RecentGuest5StarCheckIn: Number,
        greatLoction: {
          exists: Boolean,
          description: String
        },
        writtenDescription: {
          brief: String,
          theSpace: String,
          guestAccess: String,
          interactionWithGuest: String,
          otherThingsToNote: String,
          licenseRegistration: String
        },
        amenities: {
          basics: [String],
          essentials: [String],
        },
        facilities: [String],
        logistics: [String],     
        dining: [String],     
        guestAccess: [String], 
        BedAndBath: [String],
        outDoor: [String],
        safteyFeature:[String]
      },
    });

    var RentalData = mongoose.model('RentalData', rentalSchema);

    RentalData.find(function (err, RentalData) {
      if (err) return console.error(err);
      res.send(RentalData);
    })
  });
});


