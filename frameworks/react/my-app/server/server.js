const { response } = require('express');
const express = require('express');
const path = require('path');
const app = express();

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'public/main.html'));
});

const http = require('http').createServer(app);
http.listen(8080, function() {
    console.log('server on start 8080');
});