const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/FEC', { useNewUrlParser: true });

module.exports = mongoose.connection;
