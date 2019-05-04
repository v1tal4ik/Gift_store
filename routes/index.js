const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index.js');

router.post('/order',controllers.addOrder);

module.exports = router;