"use strict";
module.exports = (sequelize, DataTypes) => {
  const guild = sequelize.define(
    "guild",
    {
      name: DataTypes.STRING,
      level: DataTypes.INTEGER,
      ready_for_gw: DataTypes.BOOLEAN
    },
    {}
  );
  guild.associate = function(models) {
    models.guild.hasMany(models.user);
  };
  return guild;
};
