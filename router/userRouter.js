const express = require('express')
const { signUp, 
    login, 
    getAll, 
    getOne, 
    resetPassword, 
    forgetPassword, 
    remove,
    logOut,
    makeAdmin
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
router.put('/api/v1/admin/make-admin/:id', makeAdmin)
router.post('/api/v1/user/reset-password/:token',resetPassword);
router.post('/api/v1/user/forgot-password',forgetPassword);
router.delete('/api/v1/user/delete-customer/:id',remove );
module.exports = router;