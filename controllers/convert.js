const Currency = require('../models/Currency');
const CONVERT_API = process.env.CONVERT_API;
const axios = require('axios');

exports.convertCurrencies = async(req,res) => {
    try{
        const { fromCurrency, toCurrency, date } = req.body;
        const currentDate = new Date();
        const targetDate = new Date(date);
        const daysDifference = Math.ceil((currentDate - targetDate) / (1000 * 60 * 60 * 24));

        const response = await axios.get(
          CONVERT_API+`${fromCurrency}/market_chart`,
          {
            params: {
              vs_currency: toCurrency,
              days: daysDifference ,
              interval: 'daily',
            },
          }
        );
        const price = response.data.prices[0][1];
    
        res.status(200).json({
          fromCurrency,
          toCurrency,
          date,
          price,
        });

    }
    catch(error){
        res.status(500).json({message: error});
    }
}