//import getQuote from "./exchanger.js";

//import Controller from './Controller.js';
/*
export default (function (window, document, containerName){
    const controller = new Controller(window, document, containerName);
})(window, document, 'container'); 
const app = document.getElementById('root');
*/
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('raiz');
});

app.get('/v1/exchanger/currency/price', function(req, res) {
    res.send('getQuote');
});

app.post('/testing', function(req, res) {
    res.send('Llamada post');
    console.log(req.body);
});


app.listen(3010, function() {
    console.log('Escuchando en el puerto 3010');
});

/*
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);


console.log(getQuote('ARS', 'USD') );
*/