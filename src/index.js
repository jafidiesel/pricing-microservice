import Controller from './Controller.js';

export default (function (window, document, containerName){
    const controller = new Controller(window, document, containerName);
})(window, document, 'container');

console.log("Hello monkey!");

