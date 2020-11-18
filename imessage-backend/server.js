//dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Pusher = require("pusher");
require("dotenv").config();
const Message = require("./models/messageModel.js");
//app config
const app = express();
const port = process.env.PORT || 9000;

//middlewares
app.use(cors());
app.use(express.json());



//db config
const mongoURI = 'mongodb+srv://admin:1qBbfmCY3Mcxr6Xe@cluster0.1kgmz.mongodb.net/imessage?retryWrites=true&w=majority'
mongoose.connect(mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', ()=>{
    console.log('DB Atlas connection')
})

// api routes
app.get('/', (req, res) => res.status(200).send('Hello mundo'))

// listen 
app.listen(port, () => console.log(`listenning on localhost: ${port}`))