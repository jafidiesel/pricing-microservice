import { getQuote } from "./exchanger";

import Controller from './Controller.js';

export default (function (window, document, containerName){
    const controller = new Controller(window, document, containerName);
})(window, document, 'container'); 
const app = document.getElementById('root');


const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);


console.log(getQuote('ARS', 'USD') );