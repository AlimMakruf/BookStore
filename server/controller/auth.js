const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const UserModel = require('../models').user
// console.log(UserModel)

class AuthController{
    static login = async (req, res, next) =>{
        try {
            const {username, password} = req.body;
            console.log(JSON.stringify(req.body))
            const user = await UserModel.findOne({
                where: {
                    username
                }
            })
            if(!user) {
                res.status(404).json({
                    message: 'Either email or password is wrong'
                })
            }
            const checkPass = bcrypt.compareSync(password, user.password)
            if(!checkPass) {
                res.status(404).json({
                    message: 'Either email or password is wrong'
                })
            }
            const jwtPayload = {
                userId: user.id
            }
            const accesstoken = jwt.sign(jwtPayload, 'embero')
            res.status(200).json({
                message: "Login Success",
                accesstoken
            })
        } catch (err) {
            next({code: 500, message: err.message || 'Internal Server Error'})
        }
    }
    static register = async (req, res, next) => {
        try {
            let { username, password, role } = req.body;
            if(!username || !password){
                next({
                    code: 400,
                    message: "Fill username and password"
                })
            }
    
            password = bcrypt.hashSync(password, 8);
            await UserModel.create({
                username,
                password,
                role
            })
            res.status(201).json({
                message: "Registration is success",
                
            })
        } catch (err) {
            next({code: 500, message: err.message || 'Internal Server Error'})
        }
    }
}

module.exports = AuthController