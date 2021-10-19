const Sequelize = require('sequelize');
const database = require('../database');
const User = require('./user');

const CreditCard = database.define('CREDIT_CARD', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  cardNumber: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  cardholderName: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  CVV: {
    type: Sequelize.INTEGER.SMALLINT,
    allowNull: false,
  },
  expirationYear: {
    type: Sequelize.INTEGER.SMALLINT,
    allowNull: false,
  },
  expirationMonth: {
    type: Sequelize.INTEGER.TINYINT,
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

module.exports = CreditCard;
