const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config(); 
const mongoose = require('mongoose');
const Transaction = require('./models/transaction.js');

app.use(cors());
app.use(express.json());

app.get('/api/test',(req,res)=>{
    res.json('test ok3');
});

app.post('/api/transaction',async(req,res)=>{
    
    //console.log(process.env.MONGO_URL); // dodati paket dotenv kako bi exspress mogao citati .env datoteke
    await mongoose.connect(process.env.MONGO_URL)
    const {price,name,description,datetime} = req.body;
    const transaction = await Transaction.create({name,price,description,datetime});
    res.json(transaction);
});



const port = 4000;
app.listen(port,()=>console.log(`Port je: ${port}`));

//nodemon index.js koristi se za automatsko postavljanje novog sadrzaja, bez pokretanja index.js

//fY15Y9cwkpwtLSUd