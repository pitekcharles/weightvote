var db = require("../models");

module.exports = function (app) {
    app.post("/api/options", function (req, res) {
        db.Option.create(req.body).then(function (dbOption) {
            res.json(dbOption);
        });
    });

    app.get("/api/options/:id", function (req, res) {
        db.Option.findAll({
            where: {
                QuestionID: req.params.id
            }
        })
            .then(function (dbOrder) {
                res.json(dbOrder);
            });
    });
};