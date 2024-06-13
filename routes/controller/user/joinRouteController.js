const InitialUser = require('../database/user/StudentInitialSchema')
const hash = require('object-hash');
const joinRoutePostRequestController = async (req,res)=>{
    try{
        const {studentEmail,studentName} = req.body

        let singleUser = await InitialUser.findOne({studentEmail})
        if(singleUser){
            res.redirect(`/${singleUser['_id']}/update`)
        } else {
            const userInHash = hash({studentEmail,studentName})
            await InitialUser.create({studentName,studentEmail,studentSecretKey:userInHash})
            singleUser = await InitialUser.findOne({studentEmail});
            res.redirect(`/${singleUser['studentSecretKey']}/${singleUser['_id']}/update_me`)


        }

    } catch (e) {
        res.json({e:e.message})
    }
}



const joinRouteGetRequestController = async(req,res)=>{
    res.render('user/join');
}

module.exports = {
    joinRoutePostRequestController,
    joinRouteGetRequestController

}