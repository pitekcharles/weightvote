var express = require("express");
var path = require("path");
var mysql = require("mysql");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

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

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
}); 