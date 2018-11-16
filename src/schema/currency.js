var mongoose = require('mongoose');
//Modelo

var currencySchema = new mongoose.Schema({
    currencyNumericCode: { type: Number, required: true, unique: true },
    currencyDescription: { type: String, required: true },
    currencyAbbreviation: { type: String, required: true },
    currencySymbol: { type: String, required: true }
});

module.exports = {
    currencySchema: function(){
        return currencySchema;
    }

}