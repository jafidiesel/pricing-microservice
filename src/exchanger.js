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
 *      "currencyNumericCode": "",
 *      "currencyAlphaCode": "",
 *      "currencyCountry": "",
 *      "currencyName": "",
 *      "amount": "
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

server.app().get('/v1/exchanger/', function(request, response) {
    let originCurrencyAbbreviation = "";
    originCurrencyAbbreviation = request.query.originCurrency;
    let destinationCurrencyAbbreviation = "";
    destinationCurrencyAbbreviation = request.query.destinationCurrency;
    let amount = request.query.amount;

    let destinationCurrency = {
        "currencyNumericCode": "",
        "currencyAlphaCode": "",
        "currencyCountry": "",
        "currencyName": "",
        "amount": ""
    }

    server.Currency().find( { currencyAlphaCode: request.query.destinationCurrency } , function(error, currency){
        if (error) return response.status(400).send(response.statusCode + " incorrect parameters in currencyAlphaCode.");
        if (error) return response.status(500).send(error);

        destinationCurrency.currencyNumericCode = currency[0].currencyNumericCode;
        destinationCurrency.currencyAlphaCode = currency[0].currencyAlphaCode;
        destinationCurrency.currencyCountry = currency[0].currencyCountry;
        destinationCurrency.currencyName = currency[0].currencyName;

    });

    let compact = 'ultra'; //optional
    let query = originCurrencyAbbreviation + '_' + destinationCurrencyAbbreviation;
    let apiUrl = 'http://free.currencyconverterapi.com/api/v6/convert?q=' + `${query}`;
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
                if( (originCurrencyAbbreviation == null || originCurrencyAbbreviation == "" ) && (destinationCurrencyAbbreviation == null || destinationCurrencyAbbreviation == "" ) ) {
                    response.json( JSON.parse( '{ "error" : "Empty params" }' ) );
                } else{

                    destinationCurrency.amount = amount * parseFloat(JSON.parse(data).results[`${query}`]['val'] , 10) ;

                    response.json( destinationCurrency );
                }
                
            }else if(resp.status == 400){
                response.json(JSON.parse(400,{
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
 * @api {get} /v1/exchanger/articles/:articleId/ Convert Article Price
 * @apiName convertArticle
 * @apiGroup Currency Exchange
 * @apiPermission user
 *
 * @apiDescription Gets the article's price and converts it to the specified currency.
 *
 * @apiParam {String} currency[] Currency list separated with comma. Sent as a string with values separated by comma
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


server.app().get('/v1/exchanger/articles/:articleId/', function(request, response) {
    let idArticle = request.query.idArticle;
    let conversions = request.query.conversions;
    console.log(conversions);

    let destinationCurrency = {
        "currencyNumericCode": "",
        "currencyAlphaCode": "",
        "currencyCountry": "",
        "currencyName": "",
        "amount": ""
    }
    let array = conversions.split(",");


    response.json( array );
/* 
    server.Currency().find( { currencyAlphaCode: request.query.destinationCurrency } , function(error, currency){
        if (error) return response.status(400).send(response.statusCode + " incorrect parameters in currencyAlphaCode.");
        if (error) return response.status(500).send(error);

        destinationCurrency.currencyNumericCode = currency[0].currencyNumericCode;
        destinationCurrency.currencyAlphaCode = currency[0].currencyAlphaCode;
        destinationCurrency.currencyCountry = currency[0].currencyCountry;
        destinationCurrency.currencyName = currency[0].currencyName;

    });

    let compact = 'ultra'; //optional
    let query = originCurrencyAbbreviation + '_' + destinationCurrencyAbbreviation;
    let apiUrl = 'http://free.currencyconverterapi.com/api/v6/convert?q=' + `${query}`;
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
                if( (originCurrencyAbbreviation == null || originCurrencyAbbreviation == "" ) && (destinationCurrencyAbbreviation == null || destinationCurrencyAbbreviation == "" ) ) {
                    response.json( JSON.parse( '{ "error" : "Empty params" }' ) );
                } else{

                    destinationCurrency.amount = amount * parseFloat(JSON.parse(data).results[`${query}`]['val'] , 10) ;

                    response.json( destinationCurrency );
                }
                
            }else if(resp.status == 400){
                response.json(JSON.parse(400,{
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
 */
    

});

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
 *             "currencyAlphaCode": <value>,
 *             "currencyCountry": <value>,
 *             "currencyName": <value>,
 *             "amount": <value>
 *         },
 *         "destinationCurrency" {
 *             "currencyNumericCode": <value>,
 *             "currencyAlphaCode": <value>,
 *             "currencyCountry": <value>,
 *             "currencyName": <value>,
 *             "amount": <value>
 *         }
 *      }
 *
 *  @apiUse ParamValidationErrors
 *  @apiUse OtherErrors
 * 
 */


server.app().get('/v1/exchanger/currency/price', function(request, response) {
    let originCurrencyAbbreviation = "";
    originCurrencyAbbreviation = request.query.originCurrency;
    let destinationCurrencyAbbreviation = "";
    destinationCurrencyAbbreviation = request.query.destinationCurrency;

    let originCurrency = {
        "currencyNumericCode": "",
        "currencyAlphaCode": "",
        "currencyCountry": "",
        "currencyName": "",
        "amount": ""
        };
    let destinationCurrency = {
        "currencyNumericCode": "",
        "currencyAlphaCode": "",
        "currencyCountry": "",
        "currencyName": "",
        "amount": ""
    }

    server.Currency().find( { currencyAlphaCode: request.query.originCurrency } , function(error, currency){
        if (error) return response.status(400).send(response.statusCode + " incorrect parameters in currencyAlphaCode.");
        if (error) return response.status(500).send(error);

        originCurrency.currencyNumericCode = currency[0].currencyNumericCode;
        originCurrency.currencyAlphaCode = currency[0].currencyAlphaCode;
        originCurrency.currencyCountry = currency[0].currencyCountry;
        originCurrency.currencyName = currency[0].currencyName;

    });

    server.Currency().find( { currencyAlphaCode: request.query.destinationCurrency } , function(error, currency){
        if (error) return response.status(400).send(response.statusCode + " incorrect parameters in currencyAlphaCode.");
        if (error) return response.status(500).send(error);

        destinationCurrency.currencyNumericCode = currency[0].currencyNumericCode;
        destinationCurrency.currencyAlphaCode = currency[0].currencyAlphaCode;
        destinationCurrency.currencyCountry = currency[0].currencyCountry;
        destinationCurrency.currencyName = currency[0].currencyName;

    });

    let compact = 'ultra'; //optional
    let query = originCurrencyAbbreviation + '_' + destinationCurrencyAbbreviation;
    let apiUrl = 'http://free.currencyconverterapi.com/api/v6/convert?q=' + `${query}`;
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
                if( (originCurrencyAbbreviation == null || originCurrencyAbbreviation == "" ) && (destinationCurrencyAbbreviation == null || destinationCurrencyAbbreviation == "" ) ) {
                    response.json( JSON.parse( '{ "error" : "Empty params" }' ) );
                } else{
                    
                    originCurrency.amount = '1';

                   /*  console.log( JSON.parse(data) );
                    console.log( JSON.parse(data).query );
                    console.log( JSON.parse(data).results[`${query}`]['val'] ); */

                    destinationCurrency.amount = JSON.parse(data).results[`${query}`]['val'] ;

                    response.json({
                        originCurrency,
                        destinationCurrency
                    });
                }
                
            }else if(resp.status == 400){
                response.json(JSON.parse(400,{
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