const Router = require('express').Router()
const homeRouteController = require('../controller/user/homeRouteController')
Router.get(['/','/home'],homeRouteController)
module.exports = Router