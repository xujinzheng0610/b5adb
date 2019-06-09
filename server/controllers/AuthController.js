const User = require("../db/model").User

class AuthController {
    signup(req, res, next){
        let {username, password, email} = req.body
        username = username.toLowerCase()

        User.findOne({
            where: {username}
        }).then(user => {
            if( user !== null){
                res.status(422).json({ error:true, message:"cannot create user"})
            }else{
                User.create({
                    username,
                    password,
                    email
                }).then(user => {
                    res.json(user)
                })
            }


        })

    }
}

module.exports = new AuthController()