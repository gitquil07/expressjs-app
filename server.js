const dns = require('dns');

dns.setServers(['8.8.8.8', '1.1.1.1']);

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

// Reads and inserts environment variables
// from config.env file
// Should be placed before app
// if app access env variables
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('DB connection is successfull!');
  });

// This env environment variable
// it is value is set by expressjs
// it is default value is development
// console.log(app.get('env'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
