"use strict"

const MainRouter = require('express').Router();
const DateRouter = require('./confirmedDate');
const EventRouter = require('./event')
const LoginRouter = require('./login');
const ProfileRouter = require('./profile');
const UserRouter = require('./user');

MainRouter.get('/', (req, res) => {
    res.status(200).json({
        message: 'Server Ready'
    })
})

MainRouter.use('/events', EventRouter)
MainRouter.use('/', LoginRouter)
MainRouter.use('/dates', DateRouter)
MainRouter.use('/users', UserRouter)
MainRouter.use('/proposedDate', ProfileRouter)

module.exports = MainRouter