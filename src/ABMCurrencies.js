
/**
 * @api {get} /v1/exchanger/currency/ Read Currency
 * @apiIgnore Not finished Method
 * @apiName readCurrency
 * @apiGroup CRUD Currencies
 * @apiPermission user
 *
 * @apiDescription Read a currency
 *
 * @apiParam {String} currencyNumericCode The numeric code of a currency
 * @apiParam {String} currencyAbbreviation The destination currency
 * @apiParam {String} currencySymbol The destination currency
 * @apiParam {String} descripcionMoneda The destination currency
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 Ok
 *      {
 *          "currencyNumericCode": <value>,
 *          "currencyAbbreviation": <value>,
 *          "currencySymbol": <value>
 *      }
 *
 *  @apiUse ParamValidationErrors
 *  @apiUse OtherErrors
 * 
 */

 
export function readCurrency( currencyNumericCode, destinationCurrency, currencyAbbreviation ) {
    
    return {};
}


/**
 * @api {post} /v1/exchanger/currency/ Read Currency
 * @apiIgnore Not finished Method
 * @apiName readCurrency
 * @apiGroup CRUD Currencies
 * @apiPermission admin
 *
 * @apiDescription Read a currency
 *
 * @apiParam {String} currencyNumericCode The origin currency
 * @apiParam {String} currencyAbbreviation The destination currency
 * @apiParam {String} currencySymbol The destination currency
 * @apiParam {String} descripcionMoneda The destination currency
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 Ok
 *      {
 *          "currencyNumericCode": <value>,
 *          "currencyAbbreviation": <value>,
 *          "currencySymbol": <value>
 *      }
 *
 *  @apiUse ParamValidationErrors
 *  @apiUse OtherErrors
 * 
 */

 
export function createCurrency( currencyNumericCode, destinationCurrency, currencyAbbreviation ) {
    
    return {};
}
