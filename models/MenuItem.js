const mongoose = require('mongoose')

const menuItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        default:2
    },
    isDrink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type:[String],
        required:true
    }
})

const MenuItem = mongoose.model('MenuItem',menuItemSchema);
module.exports = MenuItem;