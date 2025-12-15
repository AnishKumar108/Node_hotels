const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/hotels')
mongoose.connect('mongodb+srv://helloworld:Qwerty12345@hotels.pjaadz7.mongodb.net/')

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
