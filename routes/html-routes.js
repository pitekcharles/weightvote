const path = require("path");

module.exports = function(app) {
    // app.get("/vote/:id", function(req, res){
    //     res.sendFile(path.join(__dirname, "../public/vote.html"));
    // });

    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });


    
};