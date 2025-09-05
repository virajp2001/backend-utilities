const mysql = require("mysql2");
require("dotenv").config();


const connection = mysql.createConnection({
  host: "localhost",  
  user: "root",          
  password: "",         
  database: "Demo"        
});


connection.connect((err) => {
  if (err) {
    console.error("Database Connection Failed:", err.message);
  } else {
    console.log("Database Connected Successfully");
  }
});

module.exports = connection;

