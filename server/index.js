const express = require('express')
const bodyParser  = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const janController = require('./controller/janController')
const app = express()
app.use(cors())

mongoose.connect('mongodb+srv://yearInPixel:yearInPixel@yearinpixel.uqqwm8e.mongodb.net/?retryWrites=true&w=majority', (err) => {
    if(err){
        console.log('DB error')
    }else{
        console.log('DB Connect')
    }
})

app.post('/api/janstatus', janController)