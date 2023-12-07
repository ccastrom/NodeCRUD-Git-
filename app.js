
require('dotenv').config()
const routeVehicles=require('./routes/vehicles')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const {urlencoded}=express;

app.use('/api/vehicles',routeVehicles);
app.use(urlencoded({extended:true}))




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})