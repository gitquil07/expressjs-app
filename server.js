const dotenv = require('dotenv');

// Reads and inserts environment variables
// from config.env file
// Should be placed before app,
// if app access env variables
dotenv.config({ path: './config.env' });

const app = require('./app');

// This env environment variable
// it is value is set by expressjs
// it is default value is development
// console.log(app.get('env'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
