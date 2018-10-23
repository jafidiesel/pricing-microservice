/**
 * @api {direct} exchanger/currency-updated Currency Updated
 * @apiIgnore
 * @apiGroup RabbitMQ GET
 *
 * @apiDescription Listening to messages to update a description of a currency.
 *
 * @apiSuccessExample
 *     {
 *       "currencyNumericCode": <value>,
 *       "currencyDescription": <value>,
 *       "currencyAbbreviation": <value>,
 *       "currencySymbol": <value>
 *     }
 */
export async function currencyUpdated( currencyId ){

}

/**
 * @api {direct} exchanger/currency-deleted Delete Currency
 * @apiIgnore
 * @apiGroup RabbitMQ POST
 *
 * @apiDescription Currency Exchanger send a message to delete data from a currency.
 *
 * @apiParam {Numeric} currencyId The id of a currency
 */
export async function deleteCurrency( currencyId ){

}


/**
 * @api {direct} exchanger/currency-updated Update Currency
 * @apiIgnore
 * @apiGroup RabbitMQ POST
 *
 * @apiDescription Currency Exchanger send a message to update data from a currency.
 *
 * @apiParam {Numeric} currencyId The id of a currency
 * @apiParam {String} currencyDescription The description of a currency
 */
export async function updateCurrency( currencyId, currencyDescription ){

}

/**
 * @api {direct} currency-order Get Order in Currency
 * @apiGroup RabbitMQ GET
 *
 * @apiDescription Ask for the total amount of an Order in a currency
 *
 * @apiParam {Numeric} currencyId The id of a currency
 * @apiParam {Numeric} orderId The id of an order
 */
export async function getOrderInCurrency( currencyId, orderId ){

}