const mongoose = require('mongoose')
const Schema = mongoose.Schema
const StudentScheme = new Schema({
    studentName:{
        type:String,
        required:true
    },
    studentEmail:{
        type:String,
        required:true
    },
    studentSecretKey:{
        type:String,
        required:false
    },
    studentCollegeName:{
        type:String,
        required:false
    },
    studentSchoolName:{
        type:String,
        required:false
    },
    studentHomeTown:{
        type:String,
        required:false
    },
    studentPhoto:{
        type:String,
        default:"confidential.jpg"
    },
    favouriteQuote:{
        type:String,
        required:false
    },
    fbId:{
        type:String,
        required:false
    },
    leftUpdateTimes:{
        type:Number,
        required:false,
        default:5
    },
    studentBloodGroup:String,
    studentGuardianNumber:{
        type:Number,
        required:false
    },
    showUser:{
        type:Boolean,
        default:false
    }


})

module.exports = mongoose.model('StudentFinal',StudentScheme,'StudentFinals')