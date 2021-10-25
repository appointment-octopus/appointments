const Sequelize = require('sequelize');
const database = require('../database');
const PossibleHours = require('./possibleHours');
const User = require('./user');

const Appointments = database.define('appointments', {
  fk_idhour: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
      model: PossibleHours,
      key: 'idhour',
    },
  },
  fk_iduser: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
      model: User,
      key: 'iduser',
    },
  },
});

module.exports = Appointments;
