const Sequelize = require('sequelize');
const database = require('../database');
const PossibleDays = require('./possibleDays');

const PossibleHours = database.define('possible_hours', {
  idhour: {
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
  fk_idday: {
    type: Sequelize.INTEGER,
    references: {
      model: PossibleDays,
      key: 'idday',
    },
  },
});

module.exports = PossibleHours;
