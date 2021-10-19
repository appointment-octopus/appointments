const Sequelize = require('sequelize');
const database = require('../database');
const PossibleDays = require('./possibleDays');

const PossibleHours = database.define('POSSIBLE_HOURS', {
  id: {
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
  fk_idPossibleDays: {
    type: Sequelize.INTEGER,
    references: {
      model: PossibleDays,
      key: 'id',
    },
  },
});

module.exports = PossibleHours;
