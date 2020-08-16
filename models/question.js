module.exports = function (sequelize, DataTypes) {
    const Question = sequelize.define("Question", {
        question: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Question.associate = function(models){
        Question.hasMany(models.Option, {
            onDelete: "cascade"
        });
    };

    return Question;
};