const express = require("express");
const path = require("path");

const router = express.Router();

router.all('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '../htmlfiles/credentials.html'));
});

router.all('/before-10th', (req,res)=>{
    res.sendFile(path.join(__dirname, '../htmlfiles/before-10th.html'));
});

router.all('/before-12th', (req,res)=>{
    res.sendFile(path.join(__dirname, '../htmlfiles/before-12th.html'));
});
module.exports = router;