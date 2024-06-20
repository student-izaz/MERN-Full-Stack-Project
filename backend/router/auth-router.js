const express = require('express');
const router = express.Router();
const authcontrollers = require('../controller/auth-controller');
const signupSchema = require('../validators/auth-validators');
const loginSchema = require('../validators/login-validator')
const validate = require('../middlewares/validate-middlewares');


router.route('/createaccount').post( validate(signupSchema), authcontrollers.createAccount);

router.route('/login').post(  validate(loginSchema), authcontrollers.login);

module.exports = router;