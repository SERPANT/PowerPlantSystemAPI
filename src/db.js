const mongoose = require('mongoose');
const config = require('./config');

const CONNECTION_URL = `mongodb://${config.DB.DB_HOST}:${config.DB.DB_PORT}/${config.DB.DB_NAME}`;

mongoose.connect(CONNECTION_URL);

const db = mongoose.connection;

db.on('error', (err) => {
  console.log('Connection to database failed');
});

db.once('open', () => {
  console.log('DB connection establised');
});

module.exports = {
  db,
};
