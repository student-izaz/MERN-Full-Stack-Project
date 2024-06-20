const express = require('express');
const router = express.Router();
const { registration } = require('../controller/registration-controller');

router.route('/registration').post( registration );

module.exports = router;