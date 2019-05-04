const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const port = process.env.PORT || 3000;

const app = express();
require('./models/index.js');

app.use(express.static(path.join(__dirname, './build')))
    .use(bodyParser.urlencoded({extended: false}))
    .use(bodyParser.text())
    .use(bodyParser.json())
    .use('/', require('./routes/index'));



app.use((req, res, next) => {
    res.status(404).json({
        err: '404',
        message: '404- page not found',
    });
});

app.use((err, req, res, next) => {
    res.status(500).json({
        err: '500',
        message: err.message
    });
});

app.listen(port, () => {
    console.log(`Server running on port : ${port}`);
});