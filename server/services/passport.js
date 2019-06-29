const passport = require('passport')
const passportJWT = require('passport-jwt')
const passportLocal = require('passport-local')
const User = require('../db/model').User

const {ExtractJwt, StrategyOptions} = passportJWT
const JWTStrategy = passportJWT.Strategy
const LocalStrategy = passportLocal.Strategy

const localOptions = {usernameField: "username"}
const localLogin = new LocalStrategy(localOptions, (username, password, done) => {
    User.findOne({
        where:{username}
    }).then(user => {
        User.build(user).comparePassword(password, user.password, (err, isMatch) => {
            if(err) return done(err)
            if(!isMatch) return done(null, false)
            return done(null, user)
        })
    }).catch(err =>{
        console.error(err)
        throw err
    })
})

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader("authorization"),
    secretOrKey: "jwtSecret"
}

const jwtLogin = new JWTStrategy(jwtOptions, (payload, done) => {
    User.findById(payload.sub).then(user => {
        if(user === null){
            done(null, false)
        }
        done(null, user)
    })
})

const strats = {
    localLogin,
    jwtLogin
}

module.exports = strats
