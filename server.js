const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// connect to DB
let dbUri = `mongodb://admin:admin123456@cluster0-shard-00-00-lfi1t.mongodb.net:27017,cluster0-shard-00-01-lfi1t.mongodb.net:27017,cluster0-shard-00-02-lfi1t.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true`;
mongoose.connect(dbUri, { useNewUrlParser: true });

// midleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//contoller
require('./controllers/users')(app);

app.get('/users', (req, res) => {
    res.send('Respon GET');
});

app.listen('8080', () => {
    console.log("Server runing http://localhost:8080");
});