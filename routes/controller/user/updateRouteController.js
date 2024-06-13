const FinalUser = require('../database/user/StudentFinalSchema')
const InitialUser = require("../database/user/StudentInitialSchema")
const updateGetRequestRouteController =  async (req,res)=>{
        try{
                // const {userID} = req.params
                // console.log(userID)
                // const isNotFake = await InitialUser.findOne({id_:userID}) || await FinalUser.findOne({_id:userID});
                // console.log("Running point-01")
                //
                // if(isNotFake){
                //         const {studentName,studentEmail} = await InitialUser.findOne({_id:userID}) || await FinalUser.findOne({_id:userID});
                //         res.render('user/update',{currentUser:{studentName,studentEmail,userID}})
                // } else {
                //         res.send("No user found.....")
                // }

                res.render('user/update');

        } catch (e) {
              res.json({e:e.message})
        }




}



const updatePostRequestRouteController =  async (req,res)=>{
        try{
                const {studentSecretKey} = req.body;
                const isNotFake = await InitialUser.findOne({studentSecretKey:studentSecretKey}) || await FinalUser.findOne({studentSecretKey:studentSecretKey});
                if(isNotFake){
                        const userID = isNotFake._id;
                        res.flash("user_found","User found successfully!")
                        res.redirect(`/${studentSecretKey}/${userID}/update_me`)
                } else {
                        res.flash("failed","Invalid Secret key...")

                        res.redirect(`/update_student/`)

                }

        } catch (e) {
                res.json({e:e.message})
        }



}




module.exports = {
        updatePostRequestRouteController,
        updateGetRequestRouteController
}