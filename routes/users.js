'use strict';

const express = require('express');
// const mongoose = require('mongoose');

const User = require('../models/user');

const router = express.Router();

router.post('/', (req, res, next) => {

  // console.log('working');
  const {fullname, username, password} = req.body;

  const newUser = {fullname, username, password};

  // User.find({username})
  //   .count()
  //   .then(count => {
  //     if (count > 0) {
  //       return Promise.reject({
  //         code: 422,
  //         reasone: 'ValidationError',
  //         message: 'Username already taken',
  //         location: 'username'
  //       });
  //     }
  //     return User.create(newUser);
  // })
  User.create(newUser)
    .then(user => {
      res.location(`${req.originalUrl}/${user.id}`).status(201).json(user);
    })
    .catch(err => {
      next(err);
    });

});

module.exports = router;