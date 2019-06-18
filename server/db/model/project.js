'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    projectID: DataTypes.INTEGER,
    yearQuarter: DataTypes.INTEGER,
    projectName: DataTypes.STRING,
    company: DataTypes.STRING,
    country: DataTypes.STRING,
    region: DataTypes.STRING,
    province: DataTypes.STRING,
    city: DataTypes.STRING,
    cityTier: DataTypes.INTEGER,
    projectLevel: DataTypes.STRING,
    NLA: DataTypes.FLOAT,
    areaOpening: DataTypes.FLOAT
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
  };
  return Project;
};