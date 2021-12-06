const UserModel = require('../models').user
const EventModel = require('../models').eeventt
const DateModel = require('../models').confirmedDate
// console.log(UserModel)

class ProfileController {

    static getProfile = async ( req, res, next ) => {
        try {
            if(req.currentUser.role == "Vendor") {
                const user = await EventModel.findAll({
                    where: {
                        vendorId: req.currentUser.id,
                    },
                    include: {
                        model: DateModel,
                        attributes: {
                            exclude: ['password', 'createdAt', "updatedAt"]
                        }
                    }
                })
                res.status(200).json(user)
                console.log('Vendor')
            } else if(req.currentUser.role == "HR") {
                const user = await EventModel.findAll({
                    include: {
                        model:  DateModel,  
                        attributes: {
                            exclude: ['password', 'createdAt', "updatedAt"]
                        }
                    },
                    where: {
                        userId: req.currentUser.id,
                    }
                })
                console.log("HR")
                res.status(200).json(user)
            }
            // console.log(req.currentUser.role)
        } catch (err) {
            next({code: 500, message: err.message || 'Internal Server Error'})
        }
    }
    
}

module.exports = ProfileController