const express = require('express');
const router = express.Router();
const { contact } = require("../controller/contact-controller");
const contactSchema = require('../validators/contact-validator')
const validate = require('../middlewares/validate-middlewares')

router.route('/contact').post(  validate(contactSchema), contact);


module.exports = router;
