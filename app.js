const http = require('http');

const express = require('express');

const app = express();  //execute as a function

app.use((req, res, next) => {
    console.log("In the middleware..");
    next(); //Alows the request to continue to the next middleware in line 

});

app.use((req, res, next) => {
    console.log("In another middleware..");
    res.send('<h1>Hello from express!</h1>');
});

const server = http.createServer(app);

server.listen(3000);
