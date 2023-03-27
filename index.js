const express = require('express');
const formate = require('date-format'); 
const app = express();

const PORT = 4000 || process.env.PORT;

app.get('/', (req, res)=>{
    res.status(200).send('<h1>Hello world</h1>')
});

app.get('/api/v1/instagram', (req, res)=>{
    const instaSocial = {
        username: 'abhijeetshende@gamil.com',
        folowers:66,
        follows: 70,
        date: formate.asString('dd-MM-yy / hh:mm:ss', new Date())
    }

    res.status(200).json({instaSocial})
})

app.get('/api/v1/facebook', (req, res)=>{
    const instaSocial = {
        username: 'nirvishende@gamil.com',
        folowers:45,
        follows: 44,
        date: formate.asString('dd-MM-yy / hh:mm:ss', new Date())
    }

    res.status(200).json({instaSocial})
})

app.get('/api/v1/linkin', (req, res)=>{
    const instaSocial = {
        username: 'pallavishende@gamil.com',
        folowers:452,
        follows: 445,
        date: formate.asString('dd-MM-yy / hh:mm:ss', new Date())
    }

    res.status(200).json({instaSocial})
})

app.get('/api/v1/:id', (req, res)=>{
    console.log('req.params.id');
    res.status(200).json({param: req.params.id})
})

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})