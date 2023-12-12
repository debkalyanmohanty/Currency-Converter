const express = require('express');
const router = express.Router();

const storeCryptocurrenciesController = require('../controllers/storeCryptocurrencies');


router.get('/getCrytocurrencies',storeCryptocurrenciesController.storeCryptocurrencies);
module.exports = router;