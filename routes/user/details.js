const Router = require('express').Router()
const detailsRouteController = require('../controller/user/detailsRouteController')
Router.get('/:studentSecretKey/details',detailsRouteController)
module.exports = Router