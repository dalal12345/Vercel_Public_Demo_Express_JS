const allAdmins = require("../database/admin/AdminScheme");

const adminSignUpGetController = (req,res)=>{
    res.render('admin/admin_sign_up.pug')
}

const  adminSignUpPostController= async (req,res)=>{
    try{
        const data = req.body;
        await allAdmins.create(data);
        res.send("Successful")

    } catch(err){
        res.render({error:err.message});
    }
}
module.exports = {
    adminSignUpGetController,
    adminSignUpPostController

}