const faker = require('faker');
const db = require('./database.js');
const RentalData = require('./models/index.js');


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('mongo is connected');


  const sf = new RentalData({
    detailHead: {
      title: faker.fake('{{lorem.word}}'),
      photoUrl: 'https://a0.muscache.com/im/pictures/7043e35d-08bf-4f64-b2dd-b9d821b40461.jpg?aki_policy=profile_x_medium',
      city: faker.fake('{{lorem.word}}'),
    },
    entireRental: {
      numOfGuest: faker.random.number({ min: 1, max: 4 }),
      numOfBedroom: faker.random.number({ min: 1, max: 4 }),
      numOfBeds: faker.random.number({ min: 1, max: 4 }),
      numOfBathroom: faker.random.number({ min: 1, max: 4 }),
    },
    hostInfo: { name: faker.fake('{{lorem.word}}') },
    quickDetail: {
      superhost: faker.random.boolean(),
      recentSparklingCleanVotes: faker.random.number({ min: 1, max: 4 }),
      checkInRating: faker.random.number({ min: 1, max: 4 }),
      selfCheckin_lockBox: faker.random.boolean(),
      RecentGuest5StarCheckIn: faker.random.number({ min: 1, max: 4 }),
      greatLoction: {
        exists: faker.random.boolean(),
        description: faker.fake('{{lorem.word}}'),
      },
      writtenDescription: {
        brief: faker.fake('{{lorem.word}}'),
        theSpace: faker.fake('{{lorem.word}}'),
        guestAccess: faker.fake('{{lorem.word}}'),
        interactionWithGuest: faker.fake('{{lorem.word}}'),
        otherThingsToNote: faker.fake('{{lorem.word}}'),
        licenseRegistration: faker.fake('{{lorem.word}}'),
      },
      amenities: {
        basics: [faker.fake('{{lorem.word}}'), faker.fake('{{lorem.word}}')],
        essentials: [faker.fake('{{lorem.word}}'), faker.fake('{{lorem.word}}')],
        facilities: ['extra pillows'],
        logistics: [faker.fake('{{lorem.word}}')],
        dining: [faker.fake('{{lorem.word}}')],
        guestAccess: [faker.fake('{{lorem.word}}')],
        BedAndBath: [faker.fake('{{lorem.word}}')],
        outDoor: [faker.fake('{{lorem.word}}')],
        safteyFeature: [faker.fake('{{lorem.word}}')],
      },
    },
  });

  sf.save((err, sf) => {
    if (err) return console.error(err);
  });

  RentalData.find((err, RentalData) => {
    if (err) return console.error(err);
    console.log(RentalData);
  });
});
