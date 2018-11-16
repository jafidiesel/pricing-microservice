var bodyParser = require('body-parser');
var express = require('express');
var mongoose = require('mongoose');
var app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/currencyExchanger-db'); // <-- conexión

const currencySchema = require('../schema/currency');

/*  mongoose.model registra el scheme
    Currency es el nombre que tendra la coleccion de divisas a guardar
    currencySchema sera el esquma que le correspondera
*/
var Currency = mongoose.model('Currency', currencySchema.currencySchema() );




app.listen(3010, function() {
    console.log('Escuchando en el puerto 3010');
});




module.exports = {
    hello: function(){
        return "Hello";
    },
    app: function(){
        return app;
    }
}