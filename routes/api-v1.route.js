const express = require('express');
const router = express.Router();

router.use('/families', require('./api/family.route'));
router.use('/members', require('./api/member.route'));

module.exports = router;
