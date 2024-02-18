const express = require('express');
const path = require('path');
let app = express();
let credential = require('./routes/Credentials.js');
let image = require('./routes/image.js');

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'./htmlfiles/homepage.html'));
});

app.use('/credentials', credential);

app.use('/image', image);
app.listen(3000);