const express = require('express');
const { auth } = require('../lib/auth');
const AppointmentsController = require('../controller/AppointmentsController');

const router = new express.Router();

router.post('/create/:hour_id', auth, AppointmentsController.createAppointment);
router.put('/update/:hour_id', auth, AppointmentsController.updateAppointment);
router.delete(
  '/delete/:hour_id',
  auth,
  AppointmentsController.deleteAppointment
);
router.get('/past', auth, AppointmentsController.getPastAppointments);
router.get('/next', auth, AppointmentsController.getNextAppointments);
router.get('/:hour_id', auth, AppointmentsController.getAppointment);

module.exports = router;
