const express = require('express');
const todoControl = require('./controllers/controller');
const hostname = '127.0.0.1'
const port = 4000

const app = express();

//template
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todoControl(app);

console.log(`App started on port ${port}`);
app.listen(port, hostname);
