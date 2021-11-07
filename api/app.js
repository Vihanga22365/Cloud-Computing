const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');
const model = require("./models/app.model");
const contorller = require("./controllers/app.controller");

const app = express();

const PORT = 5000;

db();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


require('./routes/app.routes')(app);

// Stating Server
app.listen(PORT, () => {
    console.log(`API is Listening on port ${PORT}`);
});
