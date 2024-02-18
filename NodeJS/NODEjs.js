const express = require('express');
const path = require('path');
const createError= require('http-errors');
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/index.js');
/* whatever has been exported from the index.js has been taken in 
to the indexRouter.*/
const usersRouter = require('./routes/users.js');
const { appendFileSync } = require('fs');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
/* indexRouter will be used for the / route*/
app.use('/users', usersRouter);
/* usersRouter will be used for the /users route*/

app.use(function(req,res,next){
    next(createError(404));
});