let express = require('express');
let todoControl = require('./controllers/controller');

let app = express();

//template
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todoControl(app);

app.listen(4000);
