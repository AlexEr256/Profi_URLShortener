require('dotenv').config();
const express = require('express')
const app = express();
const cors = require('cors');
const initDB = require('./initDb');
const bodyParser = require('body-parser')
const url = require('./Routes/url');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

initDB();

app.use('/', url);

app.listen(process.env.PORT || 3000, function(){
    console.log(`http://localhost:${process.env.PORT || 3000}`);
})