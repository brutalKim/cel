const mysql2 = require("mysql2/promise");
const DBconfig = require("./DBconfig.json");

const host = DBconfig.host;
const user = DBconfig.user;
const password = DBconfig.password;
const database = DBconfig.database;

const pool = mysql2.createPool({
    host,
    user,
    password,
    database,
    connectionLimit:10
});
module.exports = pool;