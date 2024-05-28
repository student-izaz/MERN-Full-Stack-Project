const express = require('express');
const router = express.Router();
const authcontrollers = require('../controller/auth-controller');
const signupSchema = require('../validators/auth-validators');
const loginSchema = require('../validators/login-validator')
const validate = require('../middlewares/validate-middlewares');

router.route('/').get(authcontrollers.home);

router.route('/register').post( validate(signupSchema), authcontrollers.register);

router.route('/login').post(  validate(loginSchema), authcontrollers.login);

module.exports = router;