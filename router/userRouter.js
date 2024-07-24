const express = require('express')
const { signUp, 
    login, 
    getAll, 
    getOne, 
    resetPassword, 
    forgetPassword, 
    remove,
    logOut,
    verifyEmail,
    resendVerificationEmail
} = require('../controller/userController');
const { singUpVlidator, 
    logInValidator 
} = require('../middleware/validation');
const authenticate = require('../middleware/userAuth');
const router = express.Router();
router.post('/api/v1/user/register',singUpVlidator,signUp);
router.post('/api/v1/user/login',logInValidator,login);
router.post('/api/v1/user/logout', logOut);
router.get("/api/v1/user/customer-info/:id", getOne);
router.get("/api/v1/user/all-customers-info",authenticate, getAll);
router.get('/api/v1/user/verify/:token', verifyEmail);
router.get('/api/v1/user/resend-email', resendVerificationEmail)
router.post('/api/v1/user/reset-password/:token',resetPassword);
router.post('/api/v1/user/forgot-password',forgetPassword);
router.delete('/api/v1/user/delete-customer',remove );
module.exports = router;