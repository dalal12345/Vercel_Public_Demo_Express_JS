const FinalUsers = require("../database/user/StudentFinalSchema")

const getAllUserRequest = async(req,res)=>{
    try{
            const allStudent = await FinalUsers.find({});
            res.render('admin/acceptUserInfo',{allStudent})
        console.log({allStudent})

    } catch(err){
        console.log(err)
    }
}


const deleteUserRequest = async(req,res)=>{
    try{
        const {studentSecretKey} = req.params;
        console.log(studentSecretKey)
        await FinalUsers.findOneAndDelete({studentSecretKey});
        res.redirect('/admin/allStudents')
    } catch(err){
        console.log(err)
    }
}

const toggleVisibilityStudentRequest = async(req,res)=>{
    try{
        const {studentSecretKey} = req.params;
        const studentInfo = await FinalUsers.findOne({studentSecretKey})
        studentInfo.showUser = !studentInfo.showUser
        await FinalUsers.findOneAndUpdate({studentSecretKey},studentInfo)
        res.redirect('/admin/allStudents')
        console.log(studentInfo)
    } catch(err){
        console.log(err)
    }
}

module.exports = {
    getAllUserRequest,
    deleteUserRequest,
    toggleVisibilityStudentRequest
}