const express = require('express');

const router = express.Router();
const MenuItem = require('../models/MenuItem')  

router.post('/', async(req,res) => {
    try{
        const data = req.body;
        const menuItem = new MenuItem(data)
        const response = await menuItem.save();
        res.status(201).json(response)

    }
    catch(err){
        res.status(500).json({"Internal Server error":err})
    }

})

router.get('/',async(req,res) => {
    try{
        const data = await MenuItem.find()
        res.status(200).json(data)
    }
    catch(err){
        res.status(500).json({"Error":err} )
    }
})

module.exports = router;
