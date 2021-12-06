"use strict"

const ProfileRouter = require('express').Router();
const ProfileController = require('../controller/profile')
const auth = require('../middleware/authMiddleware')

ProfileRouter.get('/', auth.authentication, auth.authorization(['HR','Vendor']), ProfileController.getProfile)

module.exports = ProfileRouter