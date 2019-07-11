var mongoose = require('mongoose');
var faker = require('faker');// this is faker NPM. Will help create random data
// console.log(faker.fake("{{name.firstName}}, {{lorem.word}}")); //


 let seedData = () => {
  // console.log(faker.fake("{{name.firstName}}, {{lorem.word}}"))
  // console.log(faker.random.number({min:5, max:10}))
  // console.log(faker.random.boolean())

  mongoose.connect('mongodb://localhost/FEC', {useNewUrlParser: true});
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('mongo is connected')


    var rentalSchema = new mongoose.Schema({
      detailHead:{
        title: String,
        photoUrl: String,
        city: String
      },
      entireRental: {
        numOfGuest: String,
        numOfBedroom: Number,
        numOfBeds: Number,
        numOfBathroom: Number
      },
      hostInfo: {name: String},
      quickDetail: { 
        superhost: Boolean,
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
          facilities: [String],
          logistics: [String],
          dining: [String],
          guestAccess: [String],
          BedAndBath: [String],
          outDoor: [String],
          safteyFeature:[String]
        },
      },
    });

    var RentalData = mongoose.model('RentalData', rentalSchema);

    var sf = new RentalData({ 
      detailHead:{
        title: faker.fake("{{lorem.word}}"),
        photoUrl: 'https://a0.muscache.com/im/pictures/7043e35d-08bf-4f64-b2dd-b9d821b40461.jpg?aki_policy=profile_x_medium',
        city: faker.fake("{{lorem.word}}")
      },    
      entireRental: {
        numOfGuest: faker.random.number({min:1, max:4}),
        numOfBedroom: faker.random.number({min:1, max:4}),
        numOfBeds: faker.random.number({min:1, max:4}),
        numOfBathroom: faker.random.number({min:1, max:4})
      },
      hostInfo: {name: faker.fake("{{lorem.word}}")},
      quickDetail: { 
        hostInfo: {name: faker.fake("{{lorem.word}}")},
        recentSparklingCleanVotes: faker.random.number({min:1, max:4}), 
        checkInRating: faker.random.number({min:1, max:4}), 
        selfCheckin_lockBox: faker.random.boolean(),
        RecentGuest5StarCheckIn: faker.random.number({min:1, max:4}),
        greatLoction: {
          exists: faker.random.boolean(),
          description: faker.fake("{{lorem.word}}")
        },
        writtenDescription: {
          brief: faker.fake("{{lorem.word}}"),
          theSpace: faker.fake("{{lorem.word}}"),
          guestAccess: faker.fake("{{lorem.word}}"),
          interactionWithGuest: faker.fake("{{lorem.word}}"),
          otherThingsToNote: faker.fake("{{lorem.word}}"),
          licenseRegistration: faker.fake("{{lorem.word}}")
        },
        amenities: {
          basics: [faker.fake("{{lorem.word}}"), faker.fake("{{lorem.word}}")],
          essentials: [faker.fake("{{lorem.word}}"), faker.fake("{{lorem.word}}")],
          facilities: ["extra pillows"],
          logistics: [faker.fake("{{lorem.word}}")],
          dining: [faker.fake("{{lorem.word}}")],
          guestAccess: [faker.fake("{{lorem.word}}")],
          BedAndBath: [faker.fake("{{lorem.word}}")],
          outDoor: [faker.fake("{{lorem.word}}")],
          safteyFeature:[faker.fake("{{lorem.word}}")]
        },
      },
    });

    sf.save(function (err, sf) {
      if (err) return console.error(err);
    });

    RentalData.find(function (err, RentalData) {
      if (err) return console.error(err);
      console.log(RentalData);
    })
  });
}

seedData();





