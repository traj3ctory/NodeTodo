module.exports = (app) => {

    const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://traj3ctory:CharMZ06@cluster0.ic2kd.mongodb.net/traj3ctory?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    let bodyParser = require('body-parser');

    let urlencodedParser = bodyParser.urlencoded({
        extended: false
    });

    client.connect(err => {
        const db = client.db("todo");
        const Todo = db.collection("todos");

        app.get('/todo', (req, res) => {
            //get dat from mongodb and display res
            Todo.find({}).toArray((err, data) => {
                if (err) throw err;
                res.render('todo', { todos: data });
            })
        });

        app.post('/todo', urlencodedParser, (req, res) => {
            Todo.insertOne((req.body), (err, data) => {
                if (err) throw err;
                res.json(data);
            })
        });

        app.delete('/todo/:item', (req, res) => {

            Todo.deleteOne({ item: req.params.item.replace(/\-/g, " ") }, (err, data) => {
                if (err) throw (err);
                res.json(data);
            })
        });
    })
};