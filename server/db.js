const Pool = require('pg') .Pool;
require('dotenv').config();

const pool = new Pool({
    user: process.env.REACT_APP_USERNAME,
    password: process.env.REACT_APP_PASSWORD,
    host: process.env.REACT_APP_HOST,
    port: process.env.REACT_APP_PORT,
    database: 'todoapp'
});

module.exports = pool;