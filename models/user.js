'use strict';

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  fullname: String,
  username: { type: String, required: true, unique: true},
  password: String
});

UserSchema.set('toObject', {
  virtuals: true,     // include built-in virtual `id`
  versionKey: false,  // remove `__v` version key
  transform: (doc, ret) => {
    delete ret._id; // delete `_id`
    delete ret.password;
  }
});

UserSchema.method.serialize = function () {
  return {
    id: this._id,
    fullname: this.fullname,
    username: this.username,
  };
};

module.exports = mongoose.model('User', UserSchema);