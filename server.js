var express = require("express");
var path = require("path");
var mysql = require("mysql");

var app = express();
var PORT = process.env.PORT || 3000;

// const db = require("./models");

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

require("./routes/poll-api-routes");
require("./routes/html-routes");

var mysqlConnection = mysql.createConnection({
    host : "localhost",
    port: 3306,
    user: "root",
    password : "password",
    database : "weightvote_db"
})

mysqlConnection.connect((err)=>{
    if(!err){
        console.log("Connected");
    } else {
        console.log("connection failed" + err.stack);
    }
})

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
}); 