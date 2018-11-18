const server = require('./server/server');


// Create currency
server.app().post('/v1/exchanger/currency/', function(req, res) {
    var currencyToCreate = new server.Currency()();
    currencyToCreate.currencyNumericCode = req.body.currencyNumericCode;
    currencyToCreate.currencyAlphaCode = req.body.currencyAlphaCode;
    currencyToCreate.currencyCountry = req.body.currencyCountry;
    currencyToCreate.currencyName = req.body.currencyName;

    currencyToCreate.save(function(error, savedCurrency) {
        if (error) return res.status(400).send(res.statusCode + " incorrect parameters.");
        if (error) return res.status(500).send(error);

        res.status(201).json(savedCurrency);
    });
});



// Read all currencies
server.app().get('/v1/exchanger/currency/', function(req, res) {
    server.Currency().find({}, function(error, currency) {
        if (error) return res.status(400).send(res.statusCode + " incorrect parameters.");
        if (error) return res.status(500).send(error);
        
       res.json(currency);
    }); 
});

/**
 * @api {get} /v1/exchanger/currency/ Read Currency
 * @apiName readCurrency
 * @apiGroup CRUD Currencies
 * @apiPermission user
 *
 * @apiDescription Read a currency
 *
 * @apiParam {Numeric} currencyNumericCode The currency Numeric Code of a currency
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 Ok
 *      {
 *          "currencyNumericCode": <value>,
 *          "currencyAlphaCode": <value>,
 *          "currencyCountry": <value>,
 *          "currencyName": <value>
 *      }
 *  @apiUse ParamValidationErrors
 *  @apiUse OtherErrors
 * 
 */
server.app().get( '/v1/exchanger/currency/:currencyNumericCode', function( req, res ){
    server.Currency().find( { currencyNumericCode: req.params.currencyNumericCode } , function(error, currency){
        if (error) return res.status(400).send(res.statusCode + " incorrect parameters.");
        if (error) return res.status(500).send(error);

        res.json(currency);
    });
} );




