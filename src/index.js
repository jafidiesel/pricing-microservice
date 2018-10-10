import Controller from './Controller.js';

export default (function (window, document, containerName){
    const controller = new Controller(window, document, containerName);
})(window, document, 'container');

console.log("Hello monkey!");

/**
 * @api {get} /v1/currency/:monedaOrigen/:monedaDestino Convertir Monto
 * @apiName convertAmmount
 * @apiGroup Convert
 * @apiPermission user
 *
 * @apiDescription Convierte un monto enviado de una moneda especificada a otra moneda especificada
 *
 * @apiParam {Number} Monto a convertir
 * 
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 Ok
 *      {
 *          "idMoneda": "{idMoneda}",  
 *          "codigoNumericoMoneda": "{codigoNumericoMoneda}",
 *          "montoConvertido": "{montoConvertido}",
 *          "abreviaturaMoneda": "{abreviaturaMoneda}",
 *          "simboloMoneda": "{simboloMoneda}"
 *      }
 *
 */
export function convert(monto) {
    
    return {};
}