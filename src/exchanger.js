'use strict'
const server = require('./server/server');
const http = require('http');

/**
 * @api {get} /v1/exchanger/ Amount Conversion
 * @apiName convertAmount
 * @apiGroup Currency Exchange
 * @apiPermission user
 *
 * @apiDescription Convert an amount from a currency to another.
 *
 * @apiParam {Numeric} amount Amount to convert
 * @apiParam {String} originCurrency The origin currency of the amount
 * @apiParam {String} destinationCurrency The destination currency of the amount
 * 
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 Ok
 *      {
 *       "currencyNumericCode": <value>,
 *       "currencyDescription": <value>,
 *       "currencyAbbreviation": <value>,
 *       "currencySymbol": <value>,
 *       "amountConverted": <value>
 *      }
 *
 *  @apiUse ParamValidationErrors
 *  @apiUse OtherErrors
 * 
 */

 /*
export function convertAmount(amount, originCurrency, destinationCurrency) {
    
    return {};
}
*/

/**
 * @api {get} /v1/exchanger/articles/:articleId/ Convert Article Price
 * @apiName convertArticle
 * @apiGroup Currency Exchange
 * @apiPermission user
 *
 * @apiDescription Gets the article's price and converts it to the specified currency.
 *
 * @apiParam {String} currency[] Currency list separated with ,
 * 
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 Ok
 *      {
 *          "articleId": <value>,
 *          "conversions": {
 *              {
 *                  "currencyId": <value>,
 *                  "currencyNumericCode": <value>,
 *                  "currencyDescription": <value>,
 *                  "currencyAbbreviation": <value>,
 *                  "currencySymbol": <value>,
 *                  "amountConverted": <value>
 *              },
 *              {...}
 *            }
 *       }
 *
 *  @apiUse ParamValidationErrors
 *  @apiUse OtherErrors
 * 
 */

 /*
export function convertArticle( idArticle, conversions ) {
    
    return {};
}
*/

/**
 * @api {get} /v1/exchanger/orders/:orderId Convert Order Price Amount
 * @apiName convertOrder
 * @apiGroup Currency Exchange
 * @apiPermission user
 *
 * @apiDescription Gets the total amount of an order and converts it to the specified currency.
 *
 * @apiParam {String} currency[] Currency list separated with ,
 * 
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 Ok
 *      {
 *          "orderId": <value>,
 *          "conversions": {
 *              {
 *                  "currencyNumericCode": <value>,
 *                  "currencyDescription": <value>,
 *                  "currencyAbbreviation": <value>,
 *                  "currencySymbol": <value>,
 *                  "amountConverted": <value>
 *              },
 *              {...}
 *          }
 *       }
 *
 *  @apiUse ParamValidationErrors
 *  @apiUse OtherErrors
 * 
 */

 /*
export function convertOrder( idOrder, conversions ) {
    
    return {};
}
*/
/**
 * @api {get} /v1/exchanger/currency/price Get Quote
 * @apiName getQuote
 * @apiGroup Quotation
 * @apiPermission user
 *
 * @apiDescription Gets the direct conversion of a currency
 *
 * @apiParam {String} originCurrency The origin currency
 * @apiParam {String} destinationCurrency The destination currency
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 Ok
 *      {
 *         "originCurrency" {
 *             "currencyNumericCode": <value>,
 *             "currencyDescription": <value>,
 *             "currencyAbbreviation": <value>,
 *             "currencySymbol": <value>,
 *             "amount": <value>
 *         },
 *         "destinationCurrency" {
 *             "currencyNumericCode": <value>,
 *             "currencyDescription": <value>,
 *             "currencyAbbreviation": <value>,
 *             "currencySymbol": <value>,
 *             "amount": <value>
 *         }
 *      }
 *
 *  @apiUse ParamValidationErrors
 *  @apiUse OtherErrors
 * 
 */


server.app().get('/v1/exchanger/currency/price', function(request, response) {
    var originCurrency = "";
    originCurrency = request.query.originCurrency;
    var destinationCurrency = "";
    destinationCurrency = request.query.destinationCurrency;
    var compact = 'ultra'; //optional
    var query = originCurrency + '_' + destinationCurrency;
    var apiUrl = 'http://free.currencyconverterapi.com/api/v6/convert?q=' + `${query}`;
    console.log(apiUrl);

    http.get(apiUrl, (resp) => {

        console.log('http in process');
        let data = '';
        // Concatinate each chunk of data
        resp.on('data', (chunk) => {
            data += chunk;
        });
          
        resp.on('end', () => {
            if( resp.statusCode >= 200 & resp.statusCode < 400 ){
                if( originCurrency == null || destinationCurrency == null){
                    response.json( JSON.parse( '{ "error" : "Empty params" }' ) );
                } else{
                    response.json(JSON.parse(data));
                }
                
            }else if(resp.status == 400){
                response.json(JSON.parse({
                    "messages" : [
                        {
                        "path" : `${apiUrl}`,
                        "message" : `${resp.statusMessage}` 
                        }
                    ]
                } ));
            } else if(resp.status == 500){
                resp.on('end', () => {
                    response.json( JSON.parse( '{ "error" : "Not Found" }' ) );
                });
            }
            
        });
  
        // If an error occured, return the error to the user
    }).on("error", (err) => {
        response.json("Error: " + err.message);
    });
          
});
  


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