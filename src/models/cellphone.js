const Sequelize = require('sequelize');
const database = require('../database');
const User = require('./user');

const Cellphone = database.define('cellphone', {
  idcellphone: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  cellphonenumber: {
    type: Sequelize.STRING(11),
    allowNull: false,
  },
  fk_iduser: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'iduser',
    },
  },
});

module.exports = Cellphone;
