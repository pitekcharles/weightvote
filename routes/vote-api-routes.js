var db = require("../models");

module.exports = function (app) {
    app.post("/api/votes", function (req, res){
        db.Vote.create(req.body).then(function (dbVote){
            res.json(dbVote);
        });
    });
}