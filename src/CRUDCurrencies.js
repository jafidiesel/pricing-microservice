
/**
 * @api {get} /v1/exchanger/currency/ Read Currency
 * @apiName readCurrency
 * @apiGroup CRUD Currencies
 * @apiPermission user
 *
 * @apiDescription Read a currency
 *
 * @apiParam {Numeric} currencyId The id of a currency
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 Ok
 *      {
 *          "currencyNumericCode": <value>,
 *          "currencyDescription": <value>,
 *          "currencyAbbreviation": <value>,
 *          "currencySymbol": <value>
 *      }
 *
 *  @apiUse ParamValidationErrors
 *  @apiUse OtherErrors
 * 
 */

 
export function readCurrency( currencyId ) {
    
    return {};
}
