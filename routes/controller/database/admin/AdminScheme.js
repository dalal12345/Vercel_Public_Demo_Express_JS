const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Admin = new Schema({
    adminEmail:{
       type:String,
       required:true
    },
    adminPassword:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Admin',Admin,'AdminCSE14')