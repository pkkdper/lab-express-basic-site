const express = require('express');

const app = express();
const expressLayouts = require('express-ejs-layouts');
// app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(express.static('./pie'));
app.set('/views',  __dirname + '/views');
// app.use(express.static('views'));
app.get('/', (request, response, next) =>{ 
  response.render('index')
  // response.sendFile(__dirname + '/views/index.html')
});
app.get('/about', (request, response, next)=> {
  response.render('about')
  // response.sendFile(__dirname + '/views/about.html')
});
app.get('/works', (request, response, next)=> {
  response.render('works', {regina: 'Regina with extra cheese', sale:false})

  // response.sendFile(__dirname + '/views/works.html')
});

// app.use(express.static('public'));
// app.get('/public', (request, response, next) => response.sendFile(__dirname + '/public/index.css'));
  app.listen(3000, () => console.log('My first app listening on port 3000!'));