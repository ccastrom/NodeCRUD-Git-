const express = require('express')
const router = express()

router.get('/',(req,res)=>{
    //SELECT ALL VEHICLES
});

router.get('/:id',(req,res)=>{
    //SELECT A VEHICLE BY ID req.params.id
})

router.post('/',(req,res)=>{
    //CREATE A VEHICLE ||req.body 
})

router.put('/id',(req,res)=>{
    //UPDATE a vehicle by ID  req.params.id
})
router.delete('/id',(req,res)=>{
    //DELETE a vehicle by ID req.params.id
})