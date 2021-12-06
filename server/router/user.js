"use strict"

const UserRouter = require('express').Router()
const UserController = require('../controller/user')
const auth = require('./../middleware/authMiddleware')

UserRouter.get('/all', UserController.getAll)
UserRouter.get('/:userId', UserController.getDetail)
UserRouter.get('/', auth.authentication, auth.authorization(['HR','Vendor']), UserController.getVendor)
// UserRouter.get('/', auth.authentication, auth.authorization(['HR','Vendor']), UserController.getDate)
module.exports = UserRouter