const Sequelize = require('sequelize');
const database = require('../database');

const User = database.define('users', {
  iduser: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  cpf: {
    type: Sequelize.STRING(11),
    allowNull: false,
  },
  gender: {
    type: Sequelize.STRING(15),
    allowNull: false,
  },
  dateofbirth: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  fullname: {
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
