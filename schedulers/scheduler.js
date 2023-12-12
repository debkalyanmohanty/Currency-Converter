const schedule = require('node-schedule');
const Currency = require('../models/Currency');
const GET_API = process.env.GET_CURRENCIES; 
const axios = require('axios');

const updateCrypto = async () => {
    const updateCryptocurrencies = async () => {
        const response = await axios.get(GET_API, {headers: {accept: 'application/json'}});
        await Currency.deleteMany({});
        const result = await Currency.insertMany(response.data);
      };
    const job = schedule.scheduleJob('0 * * * *', async () => {
        console.log('Running the update job...');
        try {
          await updateCryptocurrencies();
        } catch (error) {
          console.error('Error updating cryptocurrencies:', error);
        }
      });
}

module.exports = updateCrypto;