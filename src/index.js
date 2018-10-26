/* import Controller from './Controller.js';

export default (function (window, document, containerName){
    const controller = new Controller(window, document, containerName);
})(window, document, 'container'); */
var jsonData;
const app = document.getElementById('root');


const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

console.log("Append succes");

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
    jsonData = JSON.parse(this.response);
    console.log("--------");
    debugger;
    var query2 = data.results;
    console.log(query2[query]);

    if( request.status >= 200 & request.status < 400 ){
        console.log(data);
        console.log(data.query);
        /* data.forEach(results => {
            console.log("Ingresa");
            // Create a div with a card class
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            // Create an h1 and set the text content to the film's title
            /* const h1 = document.createElement('h1');
            h1.textContent = currecy.results; */
/*
            // Create a p and set the text content to the film's description
            const p = document.createElement('p');
            p.textContent = `${results.ARS_USD.id}...`; // End with an ellipses

            // Append the cards to the container element
            container.appendChild(card);

            // Each card will contain an h1 and a p
            card.appendChild(h1);
            card.appendChild(p);
            
        }); */
    } else{
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    }
    
};


// Send request
request.send();