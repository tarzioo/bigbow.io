// 'use strict';

const express = require('express');
const app = express();
app.use('/styles',express.static(__dirname +'/styles'));
const router = express.Router();
const port = 3000;


app.get('/', function(req,res){
 res.sendFile(__dirname + '/main.html');
}); 

app.get('/knitting', function(req,res){
 res.sendFile(__dirname + '/knitting.html');
}); 

app.get('/photography', function(req,res){
 res.sendFile(__dirname + '/photography.html');
}); 

// app.post('/', (req, res) => {
//     var data = ({
//         name : req.body.name,
//         color : req.body.color,
//         price : req.body.price
//     })
// })

app.listen(port, () => console.log(`listening on port ${port}!`))