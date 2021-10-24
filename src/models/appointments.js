const Sequelize = require('sequelize');
const database = require('../database');
const PossibleHours = require('./possibleHours');
const User = require('./user');

const Appointments = database.define('appointments', {
  fk_idHour: {
    type: Sequelize.INTEGER,
    references: {
      model: PossibleHours,
      key: 'idHour',
    },
  },
  fk_idUser: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'idUser',
    },
  },
});

module.exports = Appointments;
