module.exports = function (sequelize, DataTypes) {
    const Poll = sequelize.define("Poll", {
        question: {
            type: DataTypes.STRING,
            allowNull: false
        },
        optionOne: {
            type: DataTypes.STRING,
            allowNull: false
        },

    })

    return Poll;
};