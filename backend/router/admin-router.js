const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin-controller');
const authMiddleware = require('../middlewares/auth-middleware')
const adminMiddlewre = require('../middlewares/admin-middleware');

router
    .route('/')
    .get( authMiddleware, adminMiddlewre, adminController.admin );

router
    .route('/users')
    .get( authMiddleware, adminMiddlewre, adminController.getalluser );

router 
    .route('/deleteUser/:id')
    .delete( authMiddleware, adminMiddlewre, adminController.deleteUser );

router
    .route('/user/:id')
    .get( authMiddleware, adminMiddlewre, adminController.getSingleUser );

router
    .route('/user/edit/:id')
    .patch( authMiddleware, adminMiddlewre, adminController.editUser );

router
    .route('/contact')
    .get( authMiddleware, adminMiddlewre, adminController.userscontact );

router
    .route('/delete_contact/:id')
    .delete( authMiddleware, adminMiddlewre, adminController.deleteContact );

module.exports = router;