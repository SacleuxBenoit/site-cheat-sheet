// Imports 
const express= require('express');
const bodyParser =require('body-parser');
const Router = require('./routes/index').router;

// Instantiate server 
const server = express();

// Body Parser configuration
server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());

// Configure routes
server.get('/',function(req,res){
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>test</h1>')
});

server.use('/api/, Router');

// Launch server
server.listen(8080,function(){
    console.log('Server en écoute')
});