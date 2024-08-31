const express = require('express');
const router = express.Router();
const authcontrollers = require('../controller/auth-controller');
const signupSchema = require('../validators/auth-validators');
const loginSchema = require('../validators/login-validator')
const validate = require('../middlewares/validate-middlewares');
const authMiddleware = require('../middlewares/auth-middleware')


router.route('/createaccount').post( validate(signupSchema), authcontrollers.createAccount);

router.route('/login').post(  validate(loginSchema), authcontrollers.login);

router.route('/user').get( authMiddleware, authcontrollers.user );

module.exports = router;