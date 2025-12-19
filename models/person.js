const mongoose = require('mongoose');
// const bcrypt = require('bcrypt')

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
    
    },
    username:{
        required:true,
        type:String,
        
    },
    password:{
        type:String,
        required:true
    }
})

// personSchema.pre('save', async function(next){
//     const person = this
//     if(!person.isModified('password')) return next()
//     try{

//         const salt = await bcrypt.genSalt(10)
//         const hashedPassword = await bcrypt.hash(person.password,salt)
//         person.password = hashedPassword
//         next()


//     }
//     catch(err){
//         next(err)
//     }
// })

// personSchema.methods.comparePassword = async function(candidatePassword){
//     try{
//         const isMatch = await bcrypt.compare(candidatePassword,this.password)
//         return isMatch
//     }
//     catch(err){
//         throw new Error(err)
//     }
// }

const Person = mongoose.model('Person',personSchema);

module.exports = Person;