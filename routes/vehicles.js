const express = require('express')
const router = express()

var carsList=[
    {id:1,brand:'Toyota',model:'Corolla',Year:2020},
    {id:2,brand:'Chevrolet',model:'Sail',Year:2023},
    {id:3,brand:'Fiat',model:'Palio',Year:2006},
    {id:4,brand:'Mazda',model:'Mazda 3',Year:2021}
]


router.get('/',(req,res)=>{
   res.send(carsList)
});

router.get('/:id',(req,res)=>{
    var carID= req.params.id;
    const getCarByID=carsList.find(c=>c.id===parseInt(carID));
    
    if(!getCarByID) return res.status(404).send('The car with the given ID was not found')
    console.log(getCarByID);
    res.send(getCarByID);

    
})

router.post('/',(req,res)=>{
    const createCar=req.body
    const newCar={
        id: carsList.length+1,
        brand:createCar.brand,
        model:createCar.model,
        Year:createCar.Year

    };
    
    carsList.push(newCar);
    res.send(carsList);


})

router.put('/:id',(req,res)=>{
    //UPDATE a vehicle by ID  req.params.id
    const car=carsList.find(c=>c.id===parseInt(req.params.id));
   
    if(!car) return res.status(404).send('The car with the given ID was not found')
   const getCar=req.body;
    
    car.brand=getCar.brand;
    car.model=getCar.model;
    car.Year=getCar.Year;

    res.send(car);


})
router.delete('/:id',(req,res)=>{
    const carID=carsList.find(c=>c.id===parseInt(req.params.id));
    
    if(!carID) return res.status(404).send('The car with the given ID was not found')
    const index=carsList.indexOf(carID);
    carsList.splice(index,1);
    res.send(carsList);
})


module.exports=router;