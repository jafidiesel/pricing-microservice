<a name="top"></a>
# currencyexchange-microservice v1.0.0

Currency exchange microservice

- [CRUD_Currencies](#crud_currencies)
	- [Delete Currency](#delete-currency)
	- [Read Currency](#read-currency)
	
- [Currency_Exchange](#currency_exchange)
	- [Amount Conversion](#amount-conversion)
	- [Convert Article Price](#convert-article-price)
	- [Convert Order Price Amount](#convert-order-price-amount)
	
- [Quotation](#quotation)
	- [Get Quote](#get-quote)
	


# <a name='crud_currencies'></a> CRUD_Currencies

## <a name='delete-currency'></a> Delete Currency
[Back to top](#top)

<p>Delete a currency</p>

	POST /v1/exchanger/currency/





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  currencyNumericCode | String | <p>The origin currency</p>|


### Success Response

Success-Response:

```
HTTP/1.1 200 Ok
```


### Error Response

400 Bad Request

```
HTTP/1.1 400 Bad Request
{
   "messages" : [
     {
       "path" : "{Nombre de la propiedad}",
       "message" : "{Motivo del error}"
     },
     ...
  ]
}
```
500 Server Error

```
HTTP/1.1 500 Internal Server Error
{
   "error" : "Not Found"
}
```
## <a name='read-currency'></a> Read Currency
[Back to top](#top)

<p>Read a currency</p>

	GET /v1/exchanger/currency/





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  currencyNumericCode | String | <p>The numeric code of a currency</p>|


### Success Response

Success-Response:

```
HTTP/1.1 200 Ok
{
    "currencyNumericCode": <value>,
    "currencyAbbreviation": <value>,
    "currencySymbol": <value>
}
```


### Error Response

400 Bad Request

```
HTTP/1.1 400 Bad Request
{
   "messages" : [
     {
       "path" : "{Nombre de la propiedad}",
       "message" : "{Motivo del error}"
     },
     ...
  ]
}
```
500 Server Error

```
HTTP/1.1 500 Internal Server Error
{
   "error" : "Not Found"
}
```
# <a name='currency_exchange'></a> Currency_Exchange

## <a name='amount-conversion'></a> Amount Conversion
[Back to top](#top)

<p>Convert an amount from a currency to another.</p>

	GET /v1/exchanger/





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  amount | Numeric | <p>Amount to convert</p>|
|  originCurrency | String | <p>The origin currency of the amount</p>|
|  destinationCurrency | String | <p>The destination currency of the amount</p>|


### Success Response

Success-Response:

```
HTTP/1.1 200 Ok
{
 "currencyNumericCode": <value>,
 "amountConverted": <value>,
 "currencyAbbreviation": <value>,
 "currencySymbol": <value>
}
```


### Error Response

400 Bad Request

```
HTTP/1.1 400 Bad Request
{
   "messages" : [
     {
       "path" : "{Nombre de la propiedad}",
       "message" : "{Motivo del error}"
     },
     ...
  ]
}
```
500 Server Error

```
HTTP/1.1 500 Internal Server Error
{
   "error" : "Not Found"
}
```
## <a name='convert-article-price'></a> Convert Article Price
[Back to top](#top)

<p>Gets the article's price and converts it to the specified currency.</p>

	GET /v1/exchanger/articles/:articleId/





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  currency[] | String | <p>Currency list separated with ,</p>|


### Success Response

Success-Response:

```
HTTP/1.1 200 Ok
{
    "articleId": <value>,
    "conversions": {
        {
            "idCurrency": <value>,
            "currencyNumericCode": <value>,
            "amountConverted": <value>,
            "currencyAbbreviation": <value>,
            "currencySymbol": <value>
        },
        {...}
      }
 }
```


### Error Response

400 Bad Request

```
HTTP/1.1 400 Bad Request
{
   "messages" : [
     {
       "path" : "{Nombre de la propiedad}",
       "message" : "{Motivo del error}"
     },
     ...
  ]
}
```
500 Server Error

```
HTTP/1.1 500 Internal Server Error
{
   "error" : "Not Found"
}
```
## <a name='convert-order-price-amount'></a> Convert Order Price Amount
[Back to top](#top)

<p>Gets the total amount of an order and converts it to the specified currency.</p>

	GET /v1/exchanger/orders/:orderId





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  currency[] | String | <p>Currency list separated with ,</p>|


### Success Response

Success-Response:

```
HTTP/1.1 200 Ok
{
    "orderId": <value>,
    "conversions": {
        {
            "currencyNumericCode": <value>,
            "amountConverted": <value>,
            "currencyAbbreviation": <value>,
            "currencySymbol": <value>
        },
        {...}
    }
 }
```


### Error Response

400 Bad Request

```
HTTP/1.1 400 Bad Request
{
   "messages" : [
     {
       "path" : "{Nombre de la propiedad}",
       "message" : "{Motivo del error}"
     },
     ...
  ]
}
```
500 Server Error

```
HTTP/1.1 500 Internal Server Error
{
   "error" : "Not Found"
}
```
# <a name='quotation'></a> Quotation

## <a name='get-quote'></a> Get Quote
[Back to top](#top)

<p>Gets the direct conversion of a currency</p>

	GET /v1/exchanger/currency/price





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  originCurrency | String | <p>The origin currency</p>|
|  destinationCurrency | String | <p>The destination currency</p>|


### Success Response

Success-Response:

```
HTTP/1.1 200 Ok
{
   "originCurrency" {
       "currencyNumericCode": <value>,
       "amount": <value>,
       "currencyAbbreviation": <value>,
       "currencySymbol": <value>
   },
   "destinationCurrency" {
       "currencyNumericCode": <value>,
       "amount": <value>,
       "currencyAbbreviation": <value>,
       "currencySymbol": <value>
   }
}
```


### Error Response

400 Bad Request

```
HTTP/1.1 400 Bad Request
{
   "messages" : [
     {
       "path" : "{Nombre de la propiedad}",
       "message" : "{Motivo del error}"
     },
     ...
  ]
}
```
500 Server Error

```
HTTP/1.1 500 Internal Server Error
{
   "error" : "Not Found"
}
```
