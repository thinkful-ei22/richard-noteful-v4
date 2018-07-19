'use strict';

require('dotenv').config();


module.exports = {
  PORT: process.env.PORT || 8080,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost/noteful',
  // MONGODB_URI: process.env.MONGODB_URI || 'mongodb://user1:asdf1234@ds143511.mlab.com:43511/noteful-v4',
  TEST_MONGODB_URI: process.env.TEST_MONGODB_URI || 'mongodb://localhost/noteful-test',
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRY: process.env.JWT_EXPIRY || '7d'
};
