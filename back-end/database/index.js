const mysql = require('mysql2');
const config = require('./config');

const connection = mysql.createConnection(config);

connection.connect((err) => {
    if (err) { 
        console.error('Error connecting to database:', err);
        return;
    }
    console.log("Database connected");
});

module.exports = connection;
