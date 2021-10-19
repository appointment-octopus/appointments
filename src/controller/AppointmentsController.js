const { Op } = require('sequelize');
const Appointments = require('../models/appointments');
const Hours = require('../models/possibleHours');

class AppointmentController {
  static async createAppointment(req, res) {
    try {
      const appointment = await Appointments.create({
        fk_idPossibleHours: req.params.hour_id,
        fk_idUser: req.params.user_id,
      });

      return res.send(appointment);
    } catch (err) {
      return res
        .status(400)
        .send({ error: `Error while creating appointment.\n${err}` });
    }
  }

  static async updateAppointment(req, res) {
    try {
      const appointment = await Appointments.findOne({
        where: {
          fk_idPossibleHours: req.params.hour_id,
          fk_idUser: req.params.user_id,
        },
      });
      const newDate = req.body;

      if (!newDate.hour_id) {
        return res
          .status(400)
          .send({ error: 'Appointment should not be empty' });
      }

      appointment.hour_id = newDate.hour_id;
      const updatedAppointment = await appointment.save();
      return res.send(updatedAppointment);
    } catch (err) {
      return res
        .status(400)
        .send({ error: `Error while updating appointment.\n${err}` });
    }
  }

  static async deleteAppointment(req, res) {
    try {
      const appointment = await Appointments.findOne({
        where: {
          fk_idPossibleHours: req.params.hour_id,
          fk_idUser: req.params.user_id,
        },
      });
      appointment.destroy();

      return res.send('Appointment deleted');
    } catch (err) {
      return res
        .status(400)
        .send({ error: `Error while deleting topic.\n${err}` });
    }
  }

  static async getPastAppointments(req, res) {
    try {
      const allHoursBefore = await Hours.findAll({
        where: {
          time: {
            [Op.lt]: new Date(),
          },
        },
      });
      const appointments = await Appointments.findAll({
        where: {
          fk_idPossibleHours: {
            [Op.in]: allHoursBefore,
          },
          fk_idUser: req.params.user_id,
        },
      });
      return res.send(appointments);
    } catch (err) {
      return res
        .status(400)
        .send({ error: `Error while fetching old appointments.${err}` });
    }
  }

  static async getNextAppointments(req, res) {
    try {
      const allHoursAfter = await Hours.findAll({
        where: {
          time: {
            [Op.gte]: new Date(),
          },
        },
      });
      const appointments = await Appointments.findAll({
        where: {
          fk_idPossibleHours: {
            [Op.in]: allHoursAfter,
          },
          fk_idUser: req.params.user_id,
        },
      });
      return res.send(appointments);
    } catch (err) {
      return res
        .status(400)
        .send({ error: `Error while fetching old appointments.${err}` });
    }
  }

  static async getAppointment(req, res) {
    try {
      const appointment = await Appointments.findOne({
        where: {
          fk_idPossibleHours: req.params.hour_id,
          fk_idUser: req.params.user_id,
        },
      });

      return res.send(appointment);
    } catch (err) {
      return res
        .status(400)
        .send({ error: `Error while fetching appointment.\n${err}` });
    }
  }
}

module.exports = AppointmentController;
