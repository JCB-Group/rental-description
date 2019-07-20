const express = require('express');
const db = require('../database/database');
const RentalData = require('../database/models/index');

const app = express();
const port = 80;

app.use(express.static('dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/getData', (req, res) => {
  RentalData.find((err, response) => {
    if (err) return console.error(err);
    res.send(response);
  });
});
console.log('updated server launched1');
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
