const mongoose = require('mongoose');
require('dotenv').config()

const MONGO_URL_LOCAL = process.env.MONGO_URL_LOCAL
mongoose.connect(MONGO_URL_LOCAL)
// const MONGO_URL = process.env.MONGO_URL 
// mongoose.connect(MONGO_URL)

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
