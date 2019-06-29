'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    projectID: DataTypes.STRING,
    yearQuarter: DataTypes.STRING,
    projectName: DataTypes.STRING,
    company: DataTypes.STRING,
    country: DataTypes.STRING,
    region: DataTypes.STRING,
    province: DataTypes.STRING,
    city: DataTypes.STRING,
    cityTier: DataTypes.INTEGER,
    projectLevel: DataTypes.STRING,
    NLA: DataTypes.STRING,
    areaOpenning: DataTypes.STRING
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
  };
  return Project;
};