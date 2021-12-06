"use strict"

const DateRouter = require('express').Router();
const DateController = require('../controller/confirmedDate')
const auth = require('../middleware/authMiddleware')


DateRouter.get('/', DateController.getAll)
DateRouter.post('/', DateController.createDate)
DateRouter.patch('/:eventId', DateController.datePatch)
DateRouter.delete('/:eventId', DateController.dateRemove)

module.exports = DateRouter