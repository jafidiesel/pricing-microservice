const server = require('./server/server');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//import Controller from './Controller.js';
/*
export default (function (window, document, containerName){
    const controller = new Controller(window, document, containerName);
})(window, document, 'container');
*/

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

server.app().get('/v1/exchanger/currency/price', function(req, res) {

    var originCurrency = req.query.originCurrency;
    var destinationCurrency = req.query.destinationCurrency;

    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest();

    var compact = 'ultra'; //optional
    var query = originCurrency + '_' + destinationCurrency;
    var apiUrl = 'https://free.currencyconverterapi.com/api/v6/convert?q=' + `${query}`;
    console.log(apiUrl);
    debugger;
    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', apiUrl , true);

    request.onload = function () {
        console.log(this.response);
        // Begin accessing JSON data here
        var data = JSON.parse(this.response);
      
        if( request.status >= 200 & request.status < 400 ){
            
            console.log(request.status);
            console.log(data.results);
            //res.send(data.results);
        } else if(request.status == 400){
            console.log(request.status);
           /*  res.send({
                "messages" : [
                    {
                    "path" : "{Nombre de la propiedad}",
                    "message" : `${request.statusText}` 
                    }
                ]
            }
            ); */
        } else if(request.status == 500){
            console.log(request.status);
            /* res.send({
                "error" : "Not Found"
            }); */
        } else{
            console.log(request.status);
            const errorMessage = document.createElement('marquee');
            errorMessage.textContent = `Gah, it's not working!`;
            app.appendChild(errorMessage);
        }
    
    }

    // Send request
    request.send();
});

 /*
export function getQuote( originCurrency, destinationCurrency ) {
    
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest();

    var compact = 'ultra'; //optional
    var query = originCurrency + '_' + destinationCurrency;
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
        } else if(request.status == 400){
            return{
                "messages" : [
                    {
                    "path" : "{Nombre de la propiedad}",
                    "message" : `${request.statusText}` 
                    }
                ]
            };
        } else if(request.status == 500){
            return{
                "error" : "Not Found"
            };
        } else{
        
            const errorMessage = document.createElement('marquee');
            errorMessage.textContent = `Gah, it's not working!`;
            app.appendChild(errorMessage);
        }
        
    };


    // Send request
    request.send();



    return {};
}
*/


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