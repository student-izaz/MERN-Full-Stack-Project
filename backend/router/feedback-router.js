const express = require('express');
const router = express.Router();
const { feedback } = require('../controller/feedback-controller');
const feedbackSchema = require('../validators/feedback-validators');
const validate = require('../middlewares/validate-middlewares');

router.route('/feedback').post( validate(feedbackSchema), feedback);

module.exports = router;