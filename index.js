const express = require('express');
const db = require('./db');
const app = express();
const passport = require('./auth.js')
require('dotenv').config()


const PORT  = process.env.PORT || 3002

app.use(express.json());

const logFunction  = (req,res,next) => {
    console.log(`[${new Date().toLocaleString()}] : Request made to ${req.originalUrl}`)
    next();
}
app.use(logFunction)

app.use(passport.initialize());




const localAuthMiddleware = passport.authenticate('local',{session:false})





app.get('/',(req,res) => {
    res.send("Hello,Welcome to my hotel")
})


const personRoutes = require('./Routes/personRoutes')
app.use('/person',personRoutes)

const menuRoutes = require('./Routes/menuRoutes')
app.use('/menuitem',menuRoutes)

app.listen(PORT,()=>{
    console.log('Server is running on port 3002');
})