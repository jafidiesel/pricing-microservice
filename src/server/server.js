var bodyParser = require('body-parser');
var express = require('express');
var mongoose = require('mongoose');
var app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/currencyExchanger-db'); // <-- conexión

//Modelo
var currencySchema = new mongoose.Schema({
    currencyNumericCode: { type: Number, required: true },
    currencyDescription: { type: String, required: true },
    currencyAbbreviation: { type: String, required: true },
    currencySymbol: { type: String, required: true }
});

/*  mongoose.model registra el scheme
    Currency es el nombre que tendra la coleccion de divisas a guardar
    currencySchema sera el esquma que le correspondera
*/
var Currency = mongoose.model('Currency', currencySchema);

// Alta currency
app.post('/v1/exchanger/currency/', function(req, res) {
    var currencyToCreate = new Currency();
    currencyToCreate.currencyNumericCode = req.body.currencyNumericCode;
    currencyToCreate.currencyDescription = req.body.currencyDescription;
    currencyToCreate.currencyAbbreviation = req.body.currencyAbbreviation;
    currencyToCreate.currencySymbol = req.body.currencySymbol;

    currencyToCreate.save(function(error, savedCurrency) {
        if (error) return res.status(500).send(error);

        res.status(201).json(savedCurrency);
    });
});



// Read all currencies
app.get('/v1/exchanger/currency/', function(req, res) {
    Currency.find({}, function(error, currency) {
        if (error) return res.status(500).send(error);
        
       res.json(currency);
    }); 
});

app.get( '/v1/exchanger/currency/:idCurrency', function( req, res ){
    Currency.findById(req.params.idCurrency, function(error, currency){
        if (error) return res.status(500).send(error);

        res.json(currency);
    });
} );







app.listen(3010, function() {
    console.log('Escuchando en el puerto 3010');
});

app.get('/', function(req, res) {
    res.send('raiz');
});

app.get('/v1/exchanger/currency/price', function(req, res) {
    res.send('getQuote');
});


