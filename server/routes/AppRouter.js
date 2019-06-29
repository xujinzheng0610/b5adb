const Router = require('express').Router
const AuthController = require("../controllers/AuthController")
const DataController = require("../controllers/DataController")
const passport = require('passport')
const strats = require('../services/passport')

passport.use(strats.localLogin)
passport.use(strats.jwtLogin)
const requireSignIn = passport.authenticate("local", {session: false})

class AppRouter{
    constructor(){
        this.router = Router()
        this.buildRoutes()
    }

    buildRoutes(){
        this.router.post("/signup", AuthController.signup)
        this.router.post("/signin", requireSignIn, AuthController.signin)
        this.router.get("/project", DataController.getProjectData)
        this.router.post("/project", DataController.addProjectData)
    }
}

const appRouter = new AppRouter()
module.exports = appRouter.router