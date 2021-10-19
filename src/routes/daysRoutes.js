const express = require('express');
const DaysController = require('../controller/DaysController');

const router = new express.Router();

router.get('/', DaysController.getDays);
router.get('/:day_id', DaysController.getHoursInDay);

module.exports = router;
