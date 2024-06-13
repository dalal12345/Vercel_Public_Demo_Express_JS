//Import packages......
const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
// const db_url = "mongodb://localhost:27017/cse14"
const db_url = "mongodb+srv://SUAhmed1234:1122@cse14.r1iv3nh.mongodb.net/fatin"
const PORT= process.env.PORT || 3000
const flash = require("express-flash-message").default
const session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);

//Global middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.static(path.resolve('./public')))
//session....
const store = new MongoDBStore({
    uri: db_url,
    collection: 'adminSessions'
},  function(error) {
    console.log(error + 'error')
});

// Catch errors
store.on('error', function(error) {
    console.log(error);
});


app.use(session({
    secret: 'This is a secret',
    cookie: {
        maxAge: 1000 * 1 * 1 * 1 * 300 // 1 week
    },
    store: store,
    resave: true,
    saveUninitialized: true
}));

//flash message setup
app.use(
    flash({
        sessionKeyName: 'express-flash-message',
        onAddFlash: (type, message) => {},
    })
);


//views setup.....
app.set("view engine","pug")
app.set("views",path.resolve('./views'))

//Import routes
const homeRoute = require('./routes/user/home')
const loginRoute = require('./routes/user/login')
const adminRoute = require('./routes/admin/admin')
const addMeRoute = require('./routes/user/update_me')
const joinRoute = require('./routes/user/join')
const updateRoute = require('./routes/user/update')
const detailsRoute = require('./routes/user/details')
const adminSignUpRoute = require('./routes/admin/adminSignUp')
const acceptUserInfo = require("./routes/admin/acceptUserInfo")


//connect database
mongoose.connect(db_url).then(()=>{
    console.log('Database is connected successfully.....')
    app.listen(PORT,(err)=>{
        if(err) throw err;
        console.log(`Server is started at port ${PORT}`)
    })
}).catch((err)=>{
    console.log("Error :",err)
})

//Mount routes
app.use('/',homeRoute)
app.use('/',loginRoute)
app.use('/',adminRoute)
app.use('/',addMeRoute)
app.use('/',joinRoute)
app.use('/',updateRoute)
app.use('/',detailsRoute)
app.use('/',adminSignUpRoute)
app.use("/",acceptUserInfo)
app.get('*',(req,res)=> res.send("Page not found"))
