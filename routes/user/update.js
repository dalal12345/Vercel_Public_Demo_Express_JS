const Router = require('express').Router()
const updateRouteController = require('../controller/user/updateRouteController')
Router.get('/update_student/',updateRouteController.updateGetRequestRouteController)
Router.post('/update_student/',updateRouteController.updatePostRequestRouteController)
module.exports = Router