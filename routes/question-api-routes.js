var db = require("../models");

module.exports = function (app) {
    app.post("/api/questions", function (req, res) {
        db.Question.create(req.body).then(function (dbQuestion) {
            res.json(dbQuestion);
        });
    });

    app.get("/api/questions", function (req, res) {
        db.Question.findAll({
            
        })
            .then(function (dbQuestion) {
                res.json(dbQuestion);
            });
    });
}