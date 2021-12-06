const jwt = require('jsonwebtoken')
const UserModel = require('./../models').user
console.log(UserModel)

exports.authentication = async (req, res, next) => {
    try {
        let { accesstoken } = req.headers;
        console.log(JSON.stringify(req.headers))

        if(!accesstoken) {
            res.status(500).json({
                message: 'Access token require'
            })
        }

        const jwtPayload = jwt.verify(accesstoken, 'embero')
        // console.log(jwtPayload)
        const user = await UserModel.findOne({
            where: {
                id: jwtPayload.userId
            }
        })

        if(!user) {
            res.status(500).json({
                message: 'invalid access token'
            })
        }
        req.currentUser = {
            ...user.dataValues
        }
        // console.log(req.currentUser)
        next()
        
    } catch (err) {
        next({code: 500, message: err.message || 'Internal Server Error'})
    }
}

exports.authorization = (roles) => (req, res, next) => {
    try {
        const currentUser = req.currentUser
        // console.log(currentUser)
        if(!roles.includes(currentUser.role)){
            res.status(500),json({
                message: 'unauthorize access'
            })
        }
        next()
    } catch (err) {
        next({code: 500, message: err.message || 'Internal Server Error'})
    }
}