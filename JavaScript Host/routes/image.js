const express = require('express');
const path = require('path')
const image = express.Router();

image.get('/img10', (req,res)=>{
    res.sendFile(path.join(__dirname, '../htmlfiles/images/img10.jpg'));
});

image.get('/img12', (req,res)=>{
    res.sendFile(path.join(__dirname, '../htmlfiles/images/img12.jpeg'));
});

module.exports = image;