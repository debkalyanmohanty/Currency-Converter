const express = require('express');
const router = express.Router();
const convertController = require('../controllers/convert');

router.post('/convert' , convertController.convertCurrencies);
module.exports = router;