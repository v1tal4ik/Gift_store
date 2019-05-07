const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index.js');

router.post('/order',controllers.addOrder);
router.get('/allOrder',controllers.getAllOrder);
router.post('/filterOrder',controllers.getFilterOrder);
router.post('/deleteOrder',controllers.deleteOrder);

module.exports = router;