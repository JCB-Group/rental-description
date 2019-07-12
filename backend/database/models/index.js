const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
  detailHead: {
    title: String,
    photoUrl: String,
    city: String,
  },
  entireRental: {
    numOfGuest: String,
    numOfBedroom: Number,
    numOfBeds: Number,
    numOfBathroom: Number,
  },
  hostInfo: { name: String },
  quickDetail: {
    superhost: Boolean,
    recentSparklingCleanVotes: Number,
    checkInRating: Number,
    selfCheckin_lockBox: Boolean,
    RecentGuest5StarCheckIn: Number,
    greatLoction: {
      exists: Boolean,
      description: String,
    },
    writtenDescription: {
      brief: String,
      theSpace: String,
      guestAccess: String,
      interactionWithGuest: String,
      otherThingsToNote: String,
      licenseRegistration: String,
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
      safteyFeature: [String],
    },
  },
});

const RentalData = mongoose.model('RentalData', rentalSchema);

module.exports = RentalData;
