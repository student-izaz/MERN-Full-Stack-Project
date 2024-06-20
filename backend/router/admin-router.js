const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin-controller');

router.route('/admin').get( adminController.admin );
router.route('/users').get( adminController.getalluser );
router.route('/contact').get( adminController.userscontact );

module.exports = router;