const Pool = require("pg").Pool;

const pool = new Pool({
  user: "saifmirza",
  password: "12345678",
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
