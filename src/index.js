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
 * @apiParam {Number} monto Monto a convertir
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
 *  @apiUse ParamValidationErrors
 *  @apiUse OtherErrors
 * 
 */

 
export function convert(monto) {
    
    return {};
}



/**
 * @apiDefine ParamValidationErrors
 *
 * @apiErrorExample 400 Bad Request
 *     HTTP/1.1 400 Bad Request
 *     {
 *        "messages" : [
 *          {
 *            "path" : "{Nombre de la propiedad}",
 *            "message" : "{Motivo del error}"
 *          },
 *          ...
 *       ]
 *     }
 */

/**
 * @apiDefine OtherErrors
 *
 * @apiErrorExample 500 Server Error
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *        "error" : "Not Found"
 *     }
 *
 */