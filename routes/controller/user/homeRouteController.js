const allStudents = require('../database/user/StudentFinalSchema')
const homeRouteController = async (req,res)=>{
    const allStudentsInfo = await allStudents.find({showUser:true}).sort({studentName:-1});
    req.session.userID="Hello from react"
    res.render('user/home.pug',{allStudentsInfo})
}

module.exports = homeRouteController