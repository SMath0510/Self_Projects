const express = require('express');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const router = express.Router();

const jsonParser = bodyParser.json();
const URLEncodedParser = bodyParser.urlencoded({extended:false});


router.post('/login', URLEncodedParser, (req,res,next)=>{
    res.send('POST on the router' + req.body.username);
})


router.post('/api/users', jsonParser, (req,res,next)=>{
    res.send('POST on the router for username');
})


router.put('/', (req,res,next)=>{
    res.send('PUT on the router');
})

module.exports = router;