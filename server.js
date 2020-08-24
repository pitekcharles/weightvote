var express = require("express");
var path = require("path");
var mysql = require("mysql");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

require("./routes/html-routes");
require("./routes/question-api-routes")(app);
require("./routes/option-api-routes")(app);
require("./routes/vote-api-routes")(app);

app.get("/vote/:id", function(req, res){
    res.sendFile(path.join(__dirname, "/public/vote.html"));
});

var db = require("./models");

db.sequelize.sync({force: true}).then(function(){
    app.listen(PORT, function(){
        console.log("App listening on PORT " + PORT);
    });
});