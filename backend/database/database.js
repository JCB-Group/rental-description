const mongoose = require('mongoose');
// // mongoose.connect('mongodb+srv://rentalDescription:<Psychology0!>@cluster0-wndy1.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

// // mongoose.connect('mongodb+srv://rentalDescription:<%50sychology%30%21>@cluster0-wndy1.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
// mongoose.connect('mongodb+srv://rentalDescription:<Psychology%30%21>@cluster0-wndy1.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

mongoose.connect('mongodb://172.17.0.2:27017/FEC', { useNewUrlParser: true });
// mongoose.connect('mongodb://localhost:27017/FEC', { useNewUrlParser: true });

module.exports = mongoose.connection;



// const MongoClient = require(‘mongodb’).MongoClient;
// const uri = "mongodb+srv://rentalDescription:<monibu>@cluster0-wndy1.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// module.exports = mongoose.connection;
