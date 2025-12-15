const express = require('express');
const router = express.Router();
const Person = require('../models/person')

router.get('/:roleType', async(req,res) => {
    try{
        const roleType = req.params.roleType;
        if(roleType == 'chef' || roleType == 'waiter' || roleType == 'manager'){
            const response = await Person.find({role:roleType})
            res.status(200).json(response)

        }
        else{
            res.status(400).json({"message":"Invalid role type"})   
        }

    }
    catch(err){
        res.status(500).json({"Error":err})
}
})

router.get('/',async(req,res)=>{
    try{
        const data = await Person.find();
        res.status(200).json(data);

    }
    catch(err){
}}
)

router.post('/',async(req,res) => {
    try{
        const data = req.body;
        const newPerson = new Person(data)
        const response = await newPerson.save()
        res.status(201).json(response)

    }
    catch(err){
        res.status(500).json({"Error":err})
    }
})

router.put('/:id',async (req,res) => {
    try{
        const id = req.params.id;
        const data = req.body;
        const response = await Person.findByIdAndUpdate(id,data,{
            new:true,
            runValidators:true
        })

        if(!response){
            res.status(404).json({"message":"Person not found"})
        }
        res.status(200).json(response);

    }
    catch(err){
        res.status(500).json({"Error":err})
    }
})

router.delete('/:id',async (req,res)=>{
    try{
        const id = req.params.id;
        const response = await Person.findByIdAndDelete(id);
        if(!response){
            res.status(404).json({"message":"Person not found"})
        }   
        res.status(200).json({"message":"Person deleted successfully"});
    }
    catch(err){
        res.status(500).json({"Error":err})
    }
})

module.exports = router;
