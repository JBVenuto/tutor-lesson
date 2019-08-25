// Schema sets up the database with tables and the tables with the columns that you want

// -- -------- Make the database to hold the pizza table --------
// DROP DATABASE IF EXISTS database;
// CREATE DATABASE database;
// USE database;

// -- --------- Make the table  --------
// CREATE TABLE table
// (
//     id INT NOT NULL AUTO_INCREMENT,
//     name VARCHAR(255) NOT NULL,
//     truefalsevalue BOOLEAN DEFAULT true,
//     numbervalue INT,
//     PRIMARY KEY (id)
// );

// -- -------- Seeds fill the table with the data you want to use --------   
// INSERT INTO table (name, numbervalue) VALUES ("first row", 100);

// ------------------- Connection to the database ---------------------
const mysql = require('mysql');

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "database"
});

connection.connect(err => {
    if(err) {
        return err;
    }
});

// Get data from the table
connection.query('SELECT * FROM table', (err, res) => {
    if (err) {
        throw err;
    }
    console.log(res);
});

// Add entry to table
connection.query(`INSERT INTO restaurants (name) VALUES ('${restaurantName}')`, (err, results) => {
    if(err) {
        console.log(err);
        throw err;
    }
    else {
        console.log('restaurant added');
    }
});