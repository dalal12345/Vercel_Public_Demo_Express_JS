const Router = require('express').Router()
const updateMeRouteController = require('../controller/user/updateMeRouteController')
Router.get('/:secret_key/:userID/update_me',updateMeRouteController.updateMeRouteController)
// Router.post('/:secret_key/:userID/update_me',updateMeRouteController.updateMePostRequestRouteController)
Router.post('/update_me',updateMeRouteController.updateMePostRequestRouteController)
Router.post('/update_me_x',updateMeRouteController.updateMeUpdateRequestRouteController)
module.exports = Router
