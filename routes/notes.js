'use strict';

const express = require('express');
const passport = require('passport');

const {getAllHandler, getByIdHandler, postHandler, putHandler, deleteHandler} = require('../controllers/note.controller');

const router = express.Router();

router.use('/', passport.authenticate('jwt', { session: false, failWithError: true }));

router.route('/')
  .get(getAllHandler)
  .post(postHandler);

router.route('/:id')
  .get(getByIdHandler)
  .put(putHandler)
  .delete(deleteHandler);

module.exports = router;