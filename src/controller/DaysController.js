const Days = require('../models/possibleDays');
const Hours = require('../models/possibleHours');

class DaysController {
  static async getDays(req, res) {
    try {
      const days = await Days.findAll();

      return res.send(days);
    } catch (err) {
      return res
        .status(400)
        .send({ error: `Error while fetching days.\n${err}` });
    }
  }

  static async getHoursInDay(req, res) {
    try {
      const hours = await Hours.findAll({
        where: {
          fk_idPossibleDays: req.params.day_id,
        },
      });

      return res.send(hours);
    } catch (err) {
      return res
        .status(400)
        .send({ error: `Error while fetching hours.\n${err}` });
    }
  }
}

module.exports = DaysController;
