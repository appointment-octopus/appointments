const express = require('express');
const appointmentsRoutes = require('./routes/appointmentsRoutes');
const daysRoutes = require('./routes/daysRoutes');

const routes = new express.Router();

routes.use('/appointments', appointmentsRoutes);
routes.use('/days', daysRoutes);

module.exports = routes;
