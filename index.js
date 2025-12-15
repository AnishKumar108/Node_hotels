const express = require('express');
const db = require('./db');
const app = express();

app.use(express.json());

app.get('/',(req,res) => {
    res.send("Hello,Welcome to my hotel")
})


const personRoutes = require('./Routes/personRoutes')
app.use('/person',personRoutes)

const menuRoutes = require('./Routes/menuRoutes')
app.use('/menuitem',menuRoutes)

app.listen(3001,()=>{
    console.log('Server is running on port 3001');
})