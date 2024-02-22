const { Pool } = require('pg');

// Create a new pool of connections for Postgres database

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'cocktail_app',
    password: 'cocktails',
    port: 5432,
});

module.exports = pool;