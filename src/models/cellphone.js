const Sequelize = require('sequelize');
const database = require('../database');
const Patient = require('./patient');

const Cellphone = database.define('cellphone', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  cellphoneNumber: {
    type: Sequelize.STRING(11),
    allowNull: false,
  },
  fk_idPatient: {
    type: Sequelize.INTEGER,
    references: {
      model: Patient,
      key: 'id',
    },
  },
});

module.exports = Cellphone;
