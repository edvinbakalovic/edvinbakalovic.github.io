const express = require('express');
const app = express();
const corse = require('cors');

app.use(corse());

app.get('/api/test',(req,res)=>{
    res.json('test ok3');
});

app.post('/api/transaction',(req,res)=>{
    res.json(req.body);
});



const port = 4043;
app.listen(port,()=>{
    console.log(`Server radi na http://localhost:${port}`);
})

//nodemon index.js koristi se za automatsko postavljanje novog sadrzaja, bez pokretanja index.js