const mongoose = require('mongoose');

const currencySchema = mongoose.Schema({
    name: { type: String, required: true },
    id: {type:String, required: true}
});

module.exports = mongoose.model('Currency' , currencySchema);