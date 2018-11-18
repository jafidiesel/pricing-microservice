const server = require('./server/server');
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

 
/* export function readCurrency( currencyId ) {
    
    return {};
} */


// Alta currency
server.app().post('/v1/exchanger/currency/', function(req, res) {
    var currencyToCreate = new server.Currency();
    currencyToCreate.currencyNumericCode = req.body.currencyNumericCode;
    currencyToCreate.currencyDescription = req.body.currencyDescription;
    currencyToCreate.currencyAbbreviation = req.body.currencyAbbreviation;
    currencyToCreate.currencySymbol = req.body.currencySymbol;

    currencyToCreate.save(function(error, savedCurrency) {
        if (error) return res.status(500).send(error);

        res.status(201).json(savedCurrency);
    });
});



// Read all currencies
server.app().get('/v1/exchanger/currency/', function(req, res) {
    server.Currency().find({}, function(error, currency) {
        if (error) return res.status(500).send(error);
        
       res.json(currency);
    }); 
});

// Get currency by Id
server.app().get( '/v1/exchanger/currency/:idCurrency', function( req, res ){
    server.Currency().findById(req.params.idCurrency, function(error, currency){
        if (error) return res.status(500).send(error);

        res.json(currency);
    });
} );




