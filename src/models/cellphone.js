const Sequelize = require('sequelize');
const database = require('../database');
const User = require('./user');

const Cellphone = database.define('cellphone', {
  idCellphone: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  cellphoneNumber: {
    type: Sequelize.STRING(11),
    allowNull: false,
  },
  fk_idUser: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'idUser',
    },
  },
});

module.exports = Cellphone;
