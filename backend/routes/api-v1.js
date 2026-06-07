const express = require('express');
const router = express.Router();

router.use('/families', require('./api/family'));
router.use('/members', require('./api/member'));

module.exports = router;