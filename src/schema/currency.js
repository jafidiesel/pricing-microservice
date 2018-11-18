var mongoose = require('mongoose');
//Modelo

var currencySchema = new mongoose.Schema({
    currencyNumericCode: { type: Number, required: true },
    currencyAlphaCode: { type: String, required: true , unique: true},
    currencyCountry: { type: String, required: true },
    currencyName: { type: String, required: true }
});

module.exports = {
    currencySchema: function(){
        return currencySchema;
    }

}