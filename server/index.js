const express = require('express')
const bodyParser  = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const janController = require('./controller/janController')
const janModel = require('./model/janModel')

const febModel = require('./model/febModel')
const febController = require('./controller/febController')

const marchModel = require('./model/marchModel')
const marchController = require('./controller/marchController')

const aprilModel = require('./model/aprilModel')
const aprilController = require('./controller/aprilController')

const mayModel = require('./model/mayModel')
const mayController = require('./controller/mayController')

const junModel = require('./model/junModel')
const junController = require('./controller/junController')

const julModel = require('./model/julModel')
const julController = require('./controller/julController')

const augModel = require('./model/augModel')
const augController = require('./controller/augController')

const sepModel = require('./model/sepModel')
const sepController = require('./controller/sepController')

const octModel = require('./model/octModel')
const octController = require('./controller/octController')

const novModel = require('./model/novModel')
const novController = require('./controller/novController')

const decModel = require('./model/decModel')
const decController = require('./controller/decController')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

mongoose.connect('mongodb+srv://yearInPixel:yearInPixel@yearinpixel.uqqwm8e.mongodb.net/?retryWrites=true&w=majority', (err) => {
    if(err){
        console.log('DB error')
    }else{
        console.log('DB Connect')
    }
})

// jan month 
app.post('/api/janstatus', janController.addStatus)
app.get('/api/janstatus', janController.getStatus)


app.put("/jan/update", async(req, res) => {
    const colorName = req.body.color;
    const id = req.body.id;

    try{
        await janModel.findById(id, (err, updateColor) => {
            updateColor.color = colorName;
            updateColor.save();
            res.send("update")
        });
    } catch (err) {
        console.log(err)
    }
})

// feb month 
app.post('/api/febstatus', febController.addStatus)
app.get('/api/febstatus', febController.getStatus)


app.put("/feb/update", async(req, res) => {
    const colorName = req.body.color;
    const id = req.body.id;

    try{
        await febModel.findById(id, (err, updateColor) => {
            updateColor.color = colorName;
            updateColor.save();
            res.send("update")
        });
    } catch (err) {
        console.log(err)
    }
})

// march month 
app.post('/api/marchstatus', marchController.addStatus)
app.get('/api/marchstatus', marchController.getStatus)


app.put("/march/update", async(req, res) => {
    const colorName = req.body.color;
    const id = req.body.id;

    try{
        await marchModel.findById(id, (err, updateColor) => {
            updateColor.color = colorName;
            updateColor.save();
            res.send("update")
        });
    } catch (err) {
        console.log(err)
    }
})

// april month 
app.post('/api/aprilstatus', aprilController.addStatus)
app.get('/api/aprilstatus', aprilController.getStatus)


app.put("/april/update", async(req, res) => {
    const colorName = req.body.color;
    const id = req.body.id;

    try{
        await aprilModel.findById(id, (err, updateColor) => {
            updateColor.color = colorName;
            updateColor.save();
            res.send("update")
        });
    } catch (err) {
        console.log(err)
    }
})


// may month 
app.post('/api/maystatus', mayController.addStatus)
app.get('/api/maystatus', mayController.getStatus)


app.put("/may/update", async(req, res) => {
    const colorName = req.body.color;
    const id = req.body.id;

    try{
        await mayModel.findById(id, (err, updateColor) => {
            updateColor.color = colorName;
            updateColor.save();
            res.send("update")
        });
    } catch (err) {
        console.log(err)
    }
})

// jun month 
app.post('/api/junstatus', junController.addStatus)
app.get('/api/junstatus', junController.getStatus)


app.put("/jun/update", async(req, res) => {
    const colorName = req.body.color;
    const id = req.body.id;

    try{
        await junModel.findById(id, (err, updateColor) => {
            updateColor.color = colorName;
            updateColor.save();
            res.send("update")
        });
    } catch (err) {
        console.log(err)
    }
})

// jul month 
app.post('/api/julstatus', julController.addStatus)
app.get('/api/julstatus', julController.getStatus)


app.put("/jul/update", async(req, res) => {
    const colorName = req.body.color;
    const id = req.body.id;

    try{
        await julModel.findById(id, (err, updateColor) => {
            updateColor.color = colorName;
            updateColor.save();
            res.send("update")
        });
    } catch (err) {
        console.log(err)
    }
})

// aug month 
app.post('/api/augstatus', augController.addStatus)
app.get('/api/augstatus', augController.getStatus)


app.put("/aug/update", async(req, res) => {
    const colorName = req.body.color;
    const id = req.body.id;

    try{
        await augModel.findById(id, (err, updateColor) => {
            updateColor.color = colorName;
            updateColor.save();
            res.send("update")
        });
    } catch (err) {
        console.log(err)
    }
})

// sep month 
app.post('/api/sepstatus', sepController.addStatus)
app.get('/api/sepstatus', sepController.getStatus)


app.put("/sep/update", async(req, res) => {
    const colorName = req.body.color;
    const id = req.body.id;

    try{
        await sepModel.findById(id, (err, updateColor) => {
            updateColor.color = colorName;
            updateColor.save();
            res.send("update")
        });
    } catch (err) {
        console.log(err)
    }
})

// oct month 
app.post('/api/octstatus', octController.addStatus)
app.get('/api/octstatus', octController.getStatus)


app.put("/oct/update", async(req, res) => {
    const colorName = req.body.color;
    const id = req.body.id;

    try{
        await octModel.findById(id, (err, updateColor) => {
            updateColor.color = colorName;
            updateColor.save();
            res.send("update")
        });
    } catch (err) {
        console.log(err)
    }
})

// nov month 
app.post('/api/novstatus', novController.addStatus)
app.get('/api/novstatus', novController.getStatus)


app.put("/nov/update", async(req, res) => {
    const colorName = req.body.color;
    const id = req.body.id;

    try{
        await novModel.findById(id, (err, updateColor) => {
            updateColor.color = colorName;
            updateColor.save();
            res.send("update")
        });
    } catch (err) {
        console.log(err)
    }
})

// dec month 
app.post('/api/decstatus', decController.addStatus)
app.get('/api/decstatus', decController.getStatus)


app.put("/dec/update", async(req, res) => {
    const colorName = req.body.color;
    const id = req.body.id;

    try{
        await decModel.findById(id, (err, updateColor) => {
            updateColor.color = colorName;
            updateColor.save();
            res.send("update")
        });
    } catch (err) {
        console.log(err)
    }
})




app.listen(5000, () => {
    console.log('Backend running At port 5000')
})