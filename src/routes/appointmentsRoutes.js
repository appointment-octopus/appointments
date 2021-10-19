const express = require('express');
const { auth } = require('../lib/auth');
const AppointmentsController = require('../controller/AppointmentsController');

const router = new express.Router();

router.post(
  '/create/:user_id/:hour_id',
  auth,
  AppointmentsController.createAppointment
);
router.put(
  '/update/:user_id/:hour_id',
  auth,
  AppointmentsController.updateAppointment
);
router.delete(
  '/delete/:user_id/:hour_id',
  auth,
  AppointmentsController.deleteAppointment
);
router.get('/past/:user_id', auth, AppointmentsController.getPastAppointments);
router.get('/next/:user_id', auth, AppointmentsController.getNextAppointments);
router.get('/:user_id/:hour_id', auth, AppointmentsController.getAppointment);

module.exports = router;
