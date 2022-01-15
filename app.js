const express = require('express');
const todoControl = require('./controllers/controller');

const app = express();

//template
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todoControl(app);



app.use('/', )

app.listen(3000);
