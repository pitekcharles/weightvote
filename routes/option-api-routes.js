var db = require("../models");

module.exports = function(app) {
    app.post("/api/options", function(req, res){
        db.Option.create(req.body).then(function(dbOption){
            res.json(dbOption);
        });
    });
};