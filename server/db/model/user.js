'use strict';
const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    hooks:{
      beforeCreate: (user, options) => {
        return bcrypt.hash(user.password, bcrypt.genSaltSync(10))
        .then(hashedPw => {
          user.password = hashedPw
        })
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};