module.exports = function (sequelize, DataTypes) {
    const Option = sequelize.define("Option", {
        option: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Option.associate = function(models){
        Option.hasMany(models.Vote, {
            onDelete: "cascade"
        });
    };

    return Option;
};