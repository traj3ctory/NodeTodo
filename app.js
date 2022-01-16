const express = require('express');
const todoControl = require('./controllers/controller');

const app = express();

//template
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todoControl(app);

app.listen(4000);

console.log('App started on 3000');