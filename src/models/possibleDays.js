const Sequelize = require('sequelize');
const database = require('../database');

const PossibleDays = database.define('POSSIBLE_DAYS', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  day: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  vacant: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

module.exports = PossibleDays;
