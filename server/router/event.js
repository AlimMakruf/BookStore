"use strict"

const EventRouter = require('express').Router();
const EventController = require('../controller/event')
const DateController = require('../controller/confirmedDate')
const auth = require('./../middleware/authMiddleware')



EventRouter.get('/', EventController.getAll)
EventRouter.get('/:eventId', auth.authentication, auth.authorization(['HR','Vendor']), EventController.getDetail)
EventRouter.post('/', auth.authentication, auth.authorization(['HR']), EventController.createEvent)
EventRouter.patch('/:eventId', auth.authentication, auth.authorization(['Vendor']), EventController.eventPatch)
EventRouter.delete('/:eventId', EventController.eventRemove)

module.exports = EventRouter