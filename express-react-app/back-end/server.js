const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

const router = express.Router();

router.get('/users', (req, res) => {
  res.send([{
    id: 3,
    username: 'Aryan'
  }, {
    id: 4, 
    username: 'John'
  }, {
    id: 5, 
    username: 'Mark'
  }, {
    id: 6, 
    username: 'Dan'
  }, {
    id: 7, 
    username: 'Wonk'
  }]);
});

app.use('/api', router);

app.listen(3001, () => console.log('Server is up and running...'));