const mongoose = require('mongoose');
require('dotenv').config()

// mongoose.connect('mongodb://localhost:27017/hotels')
const MONGO_URL = process.env.MONGO_URL 
mongoose.connect(MONGO_URL)

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('Database connected successfully');
}
)
db.on('error',(err)=>{
    console.log('Database connection failed',err);
})

db.on('disconnected',()=>{
    console.log('Database disconnected');
})

module.exports = db;
