const mongoose = require('mongoose');
const { DB_URI } = require('./env.config');

mongoose.connect(
    DB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log('Connected to Database!');
    }
);