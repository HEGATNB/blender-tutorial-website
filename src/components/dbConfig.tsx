
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.postgres,
  host: process.env.localhost,
  database: process.env.UsersDB,
  password: process.env.12345678,
  port: process.env.5432,
});

module.exports = pool;