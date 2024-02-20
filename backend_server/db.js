const { Pool } = require('pg');

// Create a new pool of connections for Postgres database

const pool = new Pool({
    user: 'postgres',
    password: 'cocktails',
    host: 'localhost',
    port: 5432,
    database: 'cocktail_app'
});

module.exports = pool;