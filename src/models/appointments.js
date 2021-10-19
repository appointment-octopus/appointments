const Sequelize = require('sequelize');
const database = require('../database');
const PossibleHours = require('./possibleHours');
const Patient = require('./patient');

const Appointments = database.define('APPOINTMENTS', {
  fk_idPossibleHours: {
    type: Sequelize.INTEGER,
    references: {
      model: PossibleHours,
      key: 'id',
    },
  },
  fk_idPatient: {
    type: Sequelize.INTEGER,
    references: {
      model: Patient,
      key: 'id',
    },
  },
});

module.exports = Appointments;
