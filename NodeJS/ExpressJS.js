const express = require('express');
const app = express();
const path = require('path');

const route = require('./routes/index.js')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/user', (req,res,next)=>{
    res.render('index', {title: 'HEY', message: 'HELLO THERE'});
    // res.redirect('/');
    // res.sendFile(path.join(__dirname,'/html_file.html'));
})

app.post('/', (req,res,next)=>{
    console.log(req.body.namebox);
    res.send(`<h2>DONE</h2>
    <form action ='/' method='GET'>
    <button>Continue</button>
    </form>`);
    // res.redirect('/');
})

app.get('/', (req,res,next)=>{
    res.send("HI");
})
// app.all('/hello/:name', function(req, res, next){
//     res.send("Hello brother");
//     console.log(req.params);
//     console.log(req.method);
// });

// app.get('/', (req, res)=>{
//     res.send('GET');
//     console.log(req.method);
// });
// app.post('/', (req, res)=>{
//     res.send('POST');
//     console.log(req.method);
// });
// app.put('/', (req, res)=>{
//     res.send('PUT');
//     console.log(req.method);
// });
// app.delete('/', (req,res)=>{
//     res.send('DELETE');
//     console.log(req.method);
// })

app.use('/route', route);

app.listen(4000);