const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

var app = express();

// configuring port
let PORT = 3000;

// to parse
app.use(bodyparser.json());

// using cors for connecting server & client
app.use(cors());

// connecting to mongoose database
mongoose.connect('mongodb://localhost:27017/ProjectManagement');

app.listen(PORT, ()=>{
    console.log('Server listening Port ' + PORT);
})

