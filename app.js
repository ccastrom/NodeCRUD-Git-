
require('dotenv').config()
const Joi=require('joi');
const routeVehicles=require('./routes/vehicles')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use('/api/vehicles',routeVehicles);




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})