const express = require('express');
const { order } = require('../controller/orderController');
const router = express.Router();
router.post("/api/v1/user/place-order",order);
module.exports = router