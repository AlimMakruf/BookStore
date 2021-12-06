"use strict"

const LoginRouter = require('express').Router()
const AuthController = require('../controller/auth')

LoginRouter.post('/login', AuthController.login)
LoginRouter.post('/register', AuthController.register)

module.exports = LoginRouter