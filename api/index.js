const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/api/test',(req,res)=>{
    res.json('test ok3');
});

app.post('/api/transaction',(req,res)=>{
    res.json(req.body);
});



const port = 4000;
app.listen(port,()=>console.log(`Port je: ${port}`));

//nodemon index.js koristi se za automatsko postavljanje novog sadrzaja, bez pokretanja index.js

