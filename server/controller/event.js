const EventModel = require('../models').eeventt
const UserModel = require('../models').user
console.log(EventModel)
// console.log(UserModel)

class EventController {
    static getAll = async (req, res, next) => {
        try {
            const event = await EventModel.findAll()
            console.log(event)
            
            res.status(200).json(event)
        } catch (err) {
            next({code: 500, message: err.message || 'Internal Server Error'})
            // console.log(err)
        }
    }
    static createEvent = async (req, res, next) => {
        try {
            const { eventName, vendorId, location } = req.body;
            console.log("Create Event")
            console.log(req.currentUser.id)
            // console.log(id)
            
            const newEventData = {
                eventName,
                vendorId: +vendorId,
                location,
                status: "Pending",
                userId: req.currentUser.id

            }

            const newEvent = await EventModel.create(newEventData)

            res.status(201).json({
                message: 'New event has been added',
                data: newEvent
            })

        } catch (err) {
            next({code: 500, message: err.message || 'Internal Server Error'})
        }
    }
    static getDetail = async (req, res, next) => {
        try {
            const { eventId } = req.params
            const event = await EventModel.findOne({
                where: {
                    id: eventId
                }
            })
            if(!event) {
                res.status(404).json({
                    message: "event not found"
                })
            }
            res.status(200).json(event)
        } catch (err) {
            next({code: 500, message: err.message || 'Internal Server Error'})
        }
    }
    static eventPatch = async (req, res, next) => {
        try {
            const { eventId } = req.params
            const { confirmedDate, status } = req.body
            const event = await EventModel.findOne({
                where: {
                    id: eventId
                }
            })
            if(!event) {
                res.status(404).json({
                    message: "event not found"
                })
            }

            event.confirmedDate = confirmedDate || event.confirmedDate;
            event.status = status || event.status

            await event.save()
            res.status(200).json({
                message: "data updated",
                event
            })
        } catch (err) {
            next({code: 500, message: err.message || 'Internal Server Error'})
        }
    }
    static eventRemove = async (req, res, next) => {
        try {
            const { eventId } = req.params
            const event = await EventModel.findOne({
                where: {
                    id: eventId
                }
            })
            if(!event) {
                res.status(404).json({
                    message: "event not found"
                })
            }

            await event.destroy()
            res.status(204).json({
                message: "data has been deleted"
            })
        } catch (err) {
            next({code: 500, message: err.message || 'Internal Server Error'})
        }
    }

}

module.exports = EventController