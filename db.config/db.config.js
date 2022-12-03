const { Client } = require('pg');
require("dotenv").config()

const db = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: 'kamiki321#',
    port: '5432',
});

module.exports = db;