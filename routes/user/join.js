const Router = require('express').Router()
const joinRouteController = require('../controller/user/joinRouteController')
Router.get('/join',joinRouteController.joinRouteGetRequestController)
Router.post('/join',joinRouteController.joinRoutePostRequestController)
module.exports = Router