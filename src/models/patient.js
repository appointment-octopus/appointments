const Sequelize = require('sequelize');
const database = require('../database');

const Patient = database.define('PATIENT', {
  id: {
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
  profilePicture: Sequelize.BLOB,
});

module.exports = Patient;
