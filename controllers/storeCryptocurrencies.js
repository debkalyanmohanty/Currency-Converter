const Currency = require('../models/Currency');
const GET_API = process.env.GET_CURRENCIES; 
const axios = require('axios');

exports.storeCryptocurrencies = async(req,res) => {
    try{
        const response = await axios.get(GET_API, {headers: {accept: 'application/json'}});
        await Currency.deleteMany({});
        const result = await Currency.insertMany(response.data);
        res.status(201).json({data: result});
    }
    catch(error){
        res.status(500).json({message: error});
    }
}