let express = require('express');
let todoControl = require('./controllers/controller');
const hostname = '127.0.0.1'
const port = 3000

let app = express();

//template
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todoControl(app);

app.listen(port, hostname);
