const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
        
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        enum:['chef','manager','waiter'],
        required:true
    
    }


})

const Person = mongoose.model('Person',personSchema);

module.exports = Person;