const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index.js');

router.post('/order',controllers.addOrder);
router.get('/allOrder',controllers.getAllOrder);

module.exports = router;