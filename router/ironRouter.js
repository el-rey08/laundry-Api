const express = require('express')
const { iron } = require('../controller/ironController')
const router= express.Router();
router.post('/api/v1/user/iron', iron)
module.exports = router