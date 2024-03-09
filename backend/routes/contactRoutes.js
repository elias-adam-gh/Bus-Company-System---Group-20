const express = require('express');
const router = express.Router();
const contactController = require('../controllers/usersController');

  router.route('/').get(contactController.getAllContacts) // fetch all users
  router.route('/').post(contactController.createContact) // create new user


module.exports = router;