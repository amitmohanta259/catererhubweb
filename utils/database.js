const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'catererhub',
    password:'password',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    multipleStatements:true,
    namedPlaceholders: true
  });

  module.exports = pool.promise();

