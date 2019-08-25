const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

var db;
var dbURL = "mongodb://localhost:27017/";

// DB connection
MongoClient.connect(dbURL, (err, dbClient) => {
  if(err) throw err;
  db = dbClient.db("usersdb");
  console.log('connected to usersdb');
});

// users list
router.get('/users', (req, res) => {
  db.collection("users").find({}).toArray((err, usersList) => {
    if(err) throw err;
    res.send(usersList);
  });
});

// create user
router.post('/users/create', (req, res) => {
  db.collection("users").insertOne({
    fullname: req.body.fullname, username: req.body.username
  }, (err, result) => {
    if(err) throw err;
    console.log('user created');
  });
});

// update user
router.put('/users/update', (req, res) => {
  db.collection("users").updateOne({_id: ObjectId(req.body._id)}, {$set: {
    fullname: req.body.fullname, username: req.body.username
  }}, (err, result) => {
    if(err) throw err;
    console.log('user updated'); 
  });
});

// delete user
router.delete('/users/delete', (req, res) => {
  db.collection("users").deleteOne({_id: ObjectId(req.body._id)}, 
  (err, result) => {
    if(err) throw err;
    console.log('user deleted');
  });
});


app.use('/api', router);

app.listen(3001, () => console.log('Server is up and running...'));