const acceptUserInfoController = require("../controller/admin/acceptUserInfoController")
const Router = require("express").Router()
//Get all student....
Router.get('/admin/allStudents/',acceptUserInfoController.getAllUserRequest)
Router.post("/admin/:studentSecretKey/delete",acceptUserInfoController.deleteUserRequest)
Router.post("/admin/:studentSecretKey/toggleVisibility",acceptUserInfoController.toggleVisibilityStudentRequest)
module.exports = Router;