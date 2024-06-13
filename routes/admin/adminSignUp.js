const Router = require('express').Router()
const adminSignUpRouteController = require('../controller/admin/adminSignUpRouteController')
Router.get('/admin/sign_up_admin',adminSignUpRouteController.adminSignUpGetController);
Router.post('/admin/sign_up_admin',adminSignUpRouteController.adminSignUpPostController);
module.exports = Router