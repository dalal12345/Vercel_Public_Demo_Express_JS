const FinalUser = require('../database/user/StudentFinalSchema')
const InitialUser = require('../database/user/StudentInitialSchema')
const updateMeRouteController = async (req, res)=>{
    try{
            const {secret_key,userID} = req.params
            const singleStudentFinal = await FinalUser.findOne({studentSecretKey:secret_key})
            const singleStudentInitial = await InitialUser.findOne({_id:userID});
            if(!singleStudentInitial && !singleStudentFinal) {
                res.send("There is no user.....")
            } else {
                if(singleStudentFinal){
                    console.log('Going to update the file!')
                    res.render('user/update_me',{singleStudentFinal,singleStudentInitial})
                } else {
                    console.log('No user yet...Creating a new one....')
                    res.render('user/add_me',{singleStudentInitial,secret_key})
                }
            }




    } catch (e) {
        res.json({e:e.message})
    }

}



const updateMePostRequestRouteController = async (req,res)=>{
  try{
      const finalUserData = req.body
      await FinalUser.create(finalUserData);
      const {studentSecretKey} = req.body;
      await InitialUser.findOneAndDelete({studentSecretKey})
      const finalUserTemplate = await FinalUser.findOne({studentSecretKey});
      res.redirect(`/${finalUserTemplate["studentSecretKey"]}/details`)
  } catch(e){
      res.json({e:e.message});
      console.log(e)
  }
}


const updateMeUpdateRequestRouteController = async (req,res)=>{
    try{
        const {studentSecretKey} = req.body
        let finalUserData = req.body;
        const FinalUserData = await FinalUser.findOne({studentSecretKey})
        if(FinalUserData.leftUpdateTimes) finalUserData.leftUpdateTimes = FinalUserData.leftUpdateTimes-1;
         await FinalUser.findOneAndUpdate({studentSecretKey},finalUserData)
        const finalUserTemplate = await FinalUser.findOne({studentSecretKey});
        res.redirect(`/${finalUserTemplate['studentSecretKey']}/details`)







    } catch(e){
        res.json({e:e.message});
        console.log(e)
    }
}


module.exports = {
    updateMeRouteController,
    updateMePostRequestRouteController,
    updateMeUpdateRequestRouteController
}