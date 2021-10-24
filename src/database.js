const Sequelize = require('sequelize');

const DB_URI = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`;

const sequelize = new Sequelize(DB_URI, {
  dialect: 'postgres',
  define: {
    freezeTableName: true,
    timestamps: false,
  },
});

module.exports = sequelize;
