/* import Controller from './Controller.js';

export default (function (window, document, containerName){
    const controller = new Controller(window, document, containerName);
})(window, document, 'container'); */
const app = document.getElementById('root');


const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);


// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

var fromCurrency = 'ARS';
var toCurrency = 'USD';
var compact = 'ultra'
var query = fromCurrency + '_' + toCurrency;
var apiUrl = 'https://free.currencyconverterapi.com/api/v6/convert?q=' + `${query}`;
console.log(apiUrl);
// Open a new connection, using the GET request on the URL endpoint
request.open('GET', apiUrl , true);

request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
//    console.log(data.results[query].val);

    if( request.status >= 200 & request.status < 400 ){
        
        return data.results;
    } else{
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    }
    
};


// Send request
request.send();