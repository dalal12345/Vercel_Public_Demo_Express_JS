const FinalStudents = require("../database/user/StudentFinalSchema")
const detailsRouteController = async (req,res)=>{
    const {studentSecretKey} = req.params
    const singleStudentDetails = await FinalStudents.findOne({studentSecretKey})
    res.render('user/details',{singleStudentDetails})
}
module.exports = detailsRouteController