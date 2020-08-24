var db = require("../models");

module.exports = function (app) {
    app.post("/api/votes", function (req, res){
        db.Vote.create(req.body).then(function (dbVote){
            res.json(dbVote);
        });
    });

    app.get("/api/votes/:id", function (req, res){
        db.Vote.findAll({
            where: {
                optionId: req.params.id
            }
        })
        .then(function (dbVote) {
            res.json(dbVote);
        });
    })
}