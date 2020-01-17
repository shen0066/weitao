const express = require("express");         //the "include"
const app     = express();                  //initialize
const http    = require("http");            //need http (built-in)
const server  = http.createServer(app);     //initialize

const PORT    = 1111;   //Ddefault 

server.listen(PORT);                            //Hey! listen.
app.use(express.static(__dirname + "\public")); //setting the heml directory

console.log("Listening on port: " + PORT);

//routes

//default route serve up index.html
app.get('/', function(req,res){
    res.sendFile(__dirname + "/public/index.html");
});

SourceBuffer.listen(PORT);
console.log('Listening on port: ' + PORT);
