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
        optionOneNoResistance: {
            type: DataTypes.INTEGER
        },
        optionOneSomeResistance: {
            type: DataTypes.INTEGER
        },
        optionOneMaximumResistance: {
            type: DataTypes.INTEGER
        },
        optionTwo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        optionTwoNoResistance: {
            type: DataTypes.INTEGER
        },
        optionTwoSomeResistance: {
            type: DataTypes.INTEGER
        },
        optionTwoMaximumResistance: {
            type: DataTypes.INTEGER
        },
        optionThree: {
            type: DataTypes.STRING,
            allowNull: false
        },
        optionThreeNoResistance: {
            type: DataTypes.INTEGER
        },
        optionThreeSomeResistance: {
            type: DataTypes.INTEGER
        },
        optionThreeMaximumResistance: {
            type: DataTypes.INTEGER
        },
        optionFour: {
            type: DataTypes.STRING,
            allowNull: false
        },
        optionFourNoResistance: {
            type: DataTypes.INTEGER
        },
        optionFourSomeResistance: {
            type: DataTypes.INTEGER
        },
        optionFourMaximumResistance: {
            type: DataTypes.INTEGER
        },
        optionFive: {
            type: DataTypes.STRING,
            allowNull: false
        },
        optionFiveNoResistance: {
            type: DataTypes.INTEGER
        },
        optionFiveSomeResistance: {
            type: DataTypes.INTEGER
        },
        optionFiveMaximumResistance: {
            type: DataTypes.INTEGER
        }

    })

    return Poll;
};