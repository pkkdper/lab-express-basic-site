const express = require('express');

const app = express();
app.use(express.static("."));
// app.use(express.static('views'));
app.get('/views', (request, response, next) => response.sendFile(__dirname + '/views/index.html'));
// app.use(express.static('public'));
app.get('/public', (request, response, next) => response.sendFile(__dirname + '/public/index.css'));
  app.listen(3000, () => console.log('My first app listening on port 3000!'));