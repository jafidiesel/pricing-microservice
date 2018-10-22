/**
 * @api {direct} exchanger/currency-updated Currency Updated
 * @apiGroup RabbitMQ GET
 *
 * @apiDescription Listening to messages to update a description of a currency.
 *
 * @apiSuccessExample
 *     {
 *       "currencyNumericCode": <value>,
 *       "description": <value>,
 *       "currencyAbbreviation": <value>,
 *       "currencySymbol": <value>
 *     }
 */
export async function updateCurrency(){

}

/**
 * @api {direct} exchanger/currency-deleted Currency Deleted
 * @apiGroup RabbitMQ POST
 *
 * @apiDescription Currency Exchanger send a message to delete data from a currency.
 *
 * @apiParam {Numeric} currencyId The id of a currency
 */
export async function updateCurrency(){

}