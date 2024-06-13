const Router = require('express').Router()
const adminSignUpRouteController = require('../controller/user/adminSignUpRouteController')
Router.get('/sign_up_admin',adminSignUpRouteController)
module.exports = Router