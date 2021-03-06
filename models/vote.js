module.exports = function (sequelize, DataTypes) {
    const Vote = sequelize.define("Vote", {
        vote: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        value: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        optionId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        questionId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })

    return Vote;
};