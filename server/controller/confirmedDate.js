const dateModel = require('../models').confirmedDate

class DateController {
    static getAll = async (req, res, next) => {
        try {
            const event = await dateModel.findAll()
            // console.log(event)
            
            res.status(200).json(event)
        } catch (err) {
            next({code: 500, message: err.message || 'Internal Server Error'})
        }
    }
    static createDate = async (req, res, next) => {
        try {
            const { dateOne, dateTwo, dateThree  } = req.body;
            
            const newEventData = {
                dateOne,
                dateTwo,
                dateThree,
                eventId: req.params.id
            }

            const newEvent = await dateModel.create(newEventData)

            res.status(201).json({
                message: 'New event has been added',
                data: newEvent
            })

        } catch (err) {
            next({code: 500, message: err.message || 'Internal Server Error'})
        }
    }

    static datePatch = async (req, res, next) => {
        try {
            const { eventId } = req.params
            const { confirmedDate, status } = req.body
            const event = await dateModel.findOne({
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
    static dateRemove = async (req, res, next) => {
        try {
            const { eventId } = req.params
            const event = await dateModel.findOne({
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

module.exports = DateController