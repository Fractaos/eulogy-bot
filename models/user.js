"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      id_guild: DataTypes.INTEGER,
      name: DataTypes.STRING,
      ingame_name: DataTypes.STRING,
      ingame_level: DataTypes.INTEGER,
      available_for_gw: DataTypes.BOOLEAN,
      is_in_gw: DataTypes.BOOLEAN
    },
    {}
  );
  user.associate = function(models) {
    models.user.belongsTo(models.guild, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return user;
};
