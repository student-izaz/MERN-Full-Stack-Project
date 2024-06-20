const express = require('express');
const router = express.Router();
const { feedback, getfeedback } = require('../controller/feedback-controller');
const feedbackSchema = require('../validators/feedback-validators');
const validate = require('../middlewares/validate-middlewares');

router.route('/feedback').post( validate(feedbackSchema), feedback);

router.route('/getfeedback').get( getfeedback );

module.exports = router;    