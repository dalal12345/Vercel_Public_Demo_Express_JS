const Router = require('express').Router()
const adminRouteController = require('../controller/admin/adminRouteController')
Router.get(['/admin/dashboard','/admin/home/panel'],adminRouteController)
module.exports = Router