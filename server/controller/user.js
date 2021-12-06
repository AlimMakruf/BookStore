const UserModel = require('../models').user
const EventModel = require('../models').eeventt
const DateModel = require('../models').confirmedDate
// console.log(UserModel)

class UserController {
    static getAll = async (req, res, next) => {
        try {
            const user = await UserModel.findAll()
            // console.log(user)
            
            res.status(200).json(user)
        } catch (err) {
            next({code: 500, message: err.message || 'Internal Server Error'})
        }
    }

    static getDetail = async (req, res, next) => {
        try {
            const { userId } = req.params
            const user = await UserModel.findOne({
                where: {
                    id: userId,
                }, attributes : {
                    exclude: ['password','createdAt', 'updatedAt']
                }
            })
            if(!user) {
                res.status(404).json({
                    message: "User not found"
                })
            }
            res.status(200).json(user)
        } catch (err) {
            next({code: 500, message: err.message || 'Internal Server Error'})
        }
    }

    static getVendor = async ( req, res, next ) => {
        try {
            if(req.currentUser.role == "Vendor") {
                const user = await EventModel.findAll({
                    where: {
                        vendorId: req.currentUser.id,
                    },
                    include: [{
                        model:  UserModel,  
                        attributes: {
                            exclude: ['password', 'createdAt', "updatedAt"]
                        }
                    },{
                        model:  DateModel,  
                        attributes: {
                            exclude: ['password', 'createdAt', "updatedAt"]
                        }
                    }]
                })
                res.status(200).json(user)
                console.log('Vendor')
            } else if(req.currentUser.role == "HR") {
                const user = await EventModel.findAll({
                    include: [{
                        model:  UserModel,  
                        attributes: {
                            exclude: ['password', 'createdAt', "updatedAt"]
                        }
                    },{
                        model:  DateModel,  
                        attributes: {
                            exclude: ['password', 'createdAt', "updatedAt"]
                        }
                    }],
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

module.exports = UserController