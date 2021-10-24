const Sequelize = require('sequelize');
const database = require('../database');

const User = database.define('users', {
  idUser: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  CPF: {
    type: Sequelize.STRING(11),
    allowNull: false,
  },
  gender: {
    type: Sequelize.STRING(15),
    allowNull: false,
  },
  dateOfBirth: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  fullName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  profilePicture: Sequelize.BLOB,
});

module.exports = User;
