const express = require("express");         
const app     = express();                  
const http    = require("http");            
const server  = http.createServer(app);     

const PORT    = 8080;   

server.listen(PORT);                            
app.use(express.static(__dirname + "\public")); 

console.log("Listening on port: " + PORT);


app.get('/', function(req,res){
    res.sendFile(__dirname + "/public/index.html");
});


console.log('Listening on port: ' + PORT);