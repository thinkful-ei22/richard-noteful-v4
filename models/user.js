'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullname: String,
  username: { type: String, required: true, unique: true},
  password: String
});