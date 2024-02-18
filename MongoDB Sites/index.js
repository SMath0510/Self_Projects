const app = require('./server');
const mongodb = require('mongodb');
const express = require('express');
const ReviewsDAO = require('./dao/reviewsDAO.js');
/*data access object*/

// const app = express();
const MongoClient = mongodb.MongoClient;
const uri = 'mongodb+srv://Shaun0510:Shaun%400510@cluster0.boiddo4.mongodb.net/?retryWrites=true&w=majority'

const port = 3000;

// app.use('/', router);
MongoClient.connect(  // connect to the mongoDB server
    uri,
    {
        maxPoolSize:50, // maximum number of clients created by a mongo
        wtimeoutMS: 2500, // without response wait for 2500 secs onli
        useNewUrlParser: true
    })
    .catch(err =>{
        console.error(err.stack)
        process.exit(1);
    })
    .then(async (client) =>{
        // await ReviewsDAO.injectDB(client)  // inject the Database using custom Function in ReviewsDAO
        app.listen(port, ()=>{
            console.log(`listening on the port ${port}`);  // using the port 
        })
    });