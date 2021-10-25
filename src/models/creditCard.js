const Sequelize = require('sequelize');
const database = require('../database');
const User = require('./user');

const CreditCard = database.define('credit_card', {
  idcreditcard: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  cardnumber: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  cardholdername: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  cvv: {
    type: Sequelize.INTEGER.SMALLINT,
    allowNull: false,
  },
  expirationyear: {
    type: Sequelize.INTEGER.SMALLINT,
    allowNull: false,
  },
  expirationmonth: {
    type: Sequelize.INTEGER.TINYINT,
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

module.exports = CreditCard;
