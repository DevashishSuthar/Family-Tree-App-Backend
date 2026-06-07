const express = require('express');
const cors = require('cors');

// create express server
const app = express();

// use middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// local imports
const { PORT } = require('./configs/env');
const { NOT_FOUND } = require('./constants/http-status-code');
const { COMMON_MESSAGES } = require('./constants/messages');
const { PUBLIC_DIR } = require('./constants/file-directories');
const apiHelper = require('./helpers/api');

//serving static files without using public folder
app.use(express.static(PUBLIC_DIR));

// database connection
require('./configs/db-connection');

// import all the models
require('./models/index');

// import all the routes
app.use(require('./routes/index'));

// import index script
require('./scripts/index');

app.get('/', (req, res) => {
    res.send('Server is up and running!');
});

// catch 404 route and pass it to error handler
app.use((req, res, next) => {
    const error = new Error(COMMON_MESSAGES.ROUTE_NOT_EXISTS);
    error.status = NOT_FOUND;
    next(error);
});

// error handlers
app.use((err, req, res, next) => {
    apiHelper.failure(res, err.message, [], NOT_FOUND);
});

// start the server
app.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
});

module.exports=app;
