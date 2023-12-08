const express = require('express')
const router = express()

var carsList=[
    {id:1,brand:'Toyota',model:'Corolla',Year:2020},
    {id:2,brand:'Chevrolet',model:'Sail',Year:2023},
    {id:3,brand:'Fiat',model:'Palio',Year:2006},
    {id:4,brand:'Mazda',model:'Mazda 3',Year:2021}
]


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


module.exports=router;