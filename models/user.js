'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullname: String,
  username: { type: String, required: true, unique: true},
  password: String
});

userSchema.set('toObject', {
  virtuals: true,     // include built-in virtual `id`
  versionKey: false,  // remove `__v` version key
  transform: (doc, ret) => {
    delete ret._id; // delete `_id`
    delete ret.password;
  }
});

userSchema.methods.validatePassword = function (password) {
  return password === this.password;
};

// UserSchema.method.serialize = function () {
//   return {
//     id: this._id,
//     fullname: this.fullname,
//     username: this.username,
//   };
// };

module.exports = mongoose.model('User', userSchema);