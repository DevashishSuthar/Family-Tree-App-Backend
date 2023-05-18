const dotenv = require('dotenv');
dotenv.config();

const {
    NODE_ENV,
    PORT,
    DB_URI,
} = process.env;

module.exports = {
    NODE_ENV,
    PORT,
    DB_URI,
};
