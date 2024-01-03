const express = require('express')
const router = express()
const validateCar=require('../validate')

var carsList = [
    { id: 1, brand: 'Toyota', model: 'Corolla', Year: 2020 },
    { id: 2, brand: 'Chevrolet', model: 'Sail', Year: 2023 },
    { id: 3, brand: 'Fiat', model: 'Palio', Year: 2006 },
    { id: 4, brand: 'Mazda', model: 'Mazda 3', Year: 2021 },
    { id: 5, brand: 'Mazda', model: 'Mazda CX-5', Year: 2023 }
]


router.get('/', (req, res) => {
    res.send(carsList)
});

router.get('/:id', (req, res) => {
    var carID = req.params.id;
    const getCarByID = carsList.find(c => c.id === parseInt(carID));

    if (!getCarByID) return res.status(404).send('The car with the given ID was not found')

    res.send(getCarByID);


})

router.post('/', (req, res) => {

    const {error,value}=validateCar(req.body);
    if(!error){
       
        const newCar = {
        id: carsList.length + 1,
        brand: value.brand,
        model: value.model,
        Year: value.Year

    };

    carsList.push(newCar);
    res.send(carsList);

    }else{
       
            const message=error.details[0].message;
            console.log(message);
            res.status(400).send(message);
        
    }
    


})

router.put('/:id', (req, res) => {

    const car = carsList.find(c => c.id === parseInt(req.params.id));

    if (!car) return res.status(404).send('The car with the given ID was not found')
    const {error,value}=validateCar(req.body);
    if(!error){
        car.brand=value.brand;
        car.model=value.model;
        car.Year=value.Year;
        res.send(car);

    }else{
        const message=error.details[0].message;
        console.log(message);
        res.status(400).send(message);
    }
  

  


})
router.delete('/:id', (req, res) => {
    const carID = carsList.find(c => c.id === parseInt(req.params.id));

    if (!carID) return res.status(404).send('The car with the given ID was not found')
    const index = carsList.indexOf(carID);
    carsList.splice(index, 1);
    res.send(carsList);
})


module.exports = router;