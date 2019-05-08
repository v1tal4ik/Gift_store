const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();
require('./models/index.js');

app.use(express.static(path.join(__dirname, './build')))
    .use(bodyParser.urlencoded({extended: false}))
    .use(bodyParser.text())
    .use(bodyParser.json())
    .use('/', require('./routes/index'));



app.use((req, res, next) => {
    res.sendFile(path.join(__dirname + '/build/error.html'));
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