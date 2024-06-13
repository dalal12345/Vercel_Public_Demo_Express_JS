const FinalUsers = require("../database/user/StudentFinalSchema");

const loginRouteGetController = (req,res)=>{
    res.render('user/login')
}

const loginRoutePostController = async (req,res)=>{
    try {


        res.redirect("/admin/allStudents/");
    } catch(err){
        res.render({err})
    }

}
module.exports = {
    loginRouteGetController,
    loginRoutePostController
}