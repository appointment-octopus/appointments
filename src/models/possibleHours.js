const Sequelize = require('sequelize');
const database = require('../database');
const PossibleDays = require('./possibleDays');

const PossibleHours = database.define('possible_hours', {
  idHour: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  time: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  vacant: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  fk_idDay: {
    type: Sequelize.INTEGER,
    references: {
      model: PossibleDays,
      key: 'idDay',
    },
  },
});

module.exports = PossibleHours;
