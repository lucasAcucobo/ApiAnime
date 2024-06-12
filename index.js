const express=require('express');
const app=express();
const conectarDB = require('./config/db');
const cors = require('cors');
const mongodb = require('mongodb');
const { mongo } = require('mongoose');

app.use(cors({
    origin:'*'
}));  

conectarDB(); 

app.use(express.json());
app.use('/', require('./routes/animes'));

app.listen(3000, ()=>{
    console.log("hola ");
});



