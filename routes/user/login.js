const Router = require('express').Router()
const loginRouteController = require('../controller/user/loginRouteController')
Router.get('/login',loginRouteController.loginRouteGetController);
Router.post("/login",loginRouteController.loginRoutePostController);
module.exports = Router