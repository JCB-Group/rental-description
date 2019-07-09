const express = require('express')
const app = express()
const port = 3000
// const seedData = require("./seed");
app.use(express.static('dist'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/FEC', {useNewUrlParser: true});

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('mongo is connected')

//   var rentalSchema = new mongoose.Schema({
//     entireRental: {
//       numOfGuest: Number,
//       numOfBedroom: Number,
//       numOfBeds: Number,
//       numOfBathroom: Number
//     }
//   });

//   var RentalData = mongoose.model('RentalData', rentalSchema);

//   var sf = new RentalData({     
//     entireRental: {
//     numOfGuest: 2,
//     numOfBedroom: 2,
//     numOfBeds: 2,
//     numOfBathroom: 2
//    } 
//   });

//   sf.save(function (err, sf) {
//     if (err) return console.error(err);
//   });

//   // RentalData.find(function (err, RentalData) {
//   //   if (err) return console.error(err);
//   //   console.log(RentalData);
//   // })
// });



app.get('/', (req, res) => {
  seedData.seedData()
  // res.send('Hello World! it;s 9:305 am Monday July8th at 10:58am')
});


