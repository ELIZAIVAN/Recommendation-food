const express = require("express");
const mongoose = require("mongoose");
const url = 'mongodb+srv://malavikavenu914:snjy5678@cluster0.8duiran.mongodb.net/Users?retryWrites=true&w=majority'
const app = express()

mongoose
  .connect(url)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use(express.json())

const foodRouter = require('./routes/foods')
app.use('/foods',foodRouter)  

app.listen(6000, () => {
    console.log('Server started')
})