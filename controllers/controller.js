module.exports = (app) => {

    const MongoClient = require('mongodb').MongoClient;
    const password = 'applocation';
    // const uri = "mongodb+srv://traj3ctory:applocation@cluster0.ic2kd.mongodb.net/traj3ctory?retryWrites=true&w=majority";
    const uri = `mongodb+srv://traj3ctory:${password}@cluster0.ic2kd.mongodb.net/traj3ctory?retryWrites=true&w=majority`
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const bodyParser = require('body-parser');

    const urlencodedParser = bodyParser.urlencoded({
        extended: false
    });

    client.connect(err => {
        const db = client.db("todo");
        const Todo = db.collection("todos");

        app.get('/', (req, res) => {
            //get data from mongodb and display res
            Todo.find({}).toArray((err, data) => {
                if (err) throw err;
                res.render('todo', { todos: data });
            })
        });

        app.post('/', urlencodedParser, (req, res) => {
            Todo.insertOne((req.body), (err, data) => {
                if (err) throw err;
                res.json(data);
            })
        });

        app.delete('/:item', (req, res) => {

            Todo.deleteOne({ item: req.params.item.replace(/\-/g, " ") }, (err, data) => {
                if (err) throw (err);
                res.json(data);
            })
        });
    })
};