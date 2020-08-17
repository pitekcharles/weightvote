module.exports = function (sequelize, DataTypes) {
    const Option = sequelize.define("Option", {
        option: {
            type: DataTypes.STRING,
            allowNull: false
        },
        QuestionID: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    // Option.associate = function(models){
    //     Option.hasMany(models.Vote, {
    //         onDelete: "cascade"
    //     });
    //     Option.belongsTo(models.Question, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return Option;
};