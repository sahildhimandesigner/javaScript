require('dotenv').config();
require('./common');
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.port || 3000;

app.use(express.static(__dirname))
app.listen(port);

console.log('Running at Port ', port);

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/login', function(req,res){
    res.sendFile(path.join(__dirname+'/login.html'));
  });

  app.get('/welcome', function(req,res){
    res.sendFile(path.join(__dirname+'/welcome.html'));
  });