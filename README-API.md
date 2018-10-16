<a name="top"></a>
# Currency Exchange Microservice


Microservicio de Cambio de Moneda

- [Currency Exchange](#currencyExchange)
  - [Amount Conversion](#amount-conversion)
  - [Convert Article's Price](#convert-article-price)
  - [Convert Cart's Price Amount](#convert-cart-price-amount)

- [Cotización](#cotizacion)
  - [Obtener Cotización](#obtener-cotizacion)

- [ABM Monedas](#abm-monedas)
  - [Alta Moneda](#alta-moneda)
  - [Baja Moneda](#baja-moneda)
  - [Modificación Moneda](#modificacion-moneda)

# <a name='currencyExchange'></a> Currency Exchange

## <a name='#amount-conversion'></a> Amount Conversion
[Back to top](#top)

<p>Convert an amount from a currency to another.</p>

```
	GET /v1/exchanger/
```


### Examples

Body

```
{
    "amount": <value>,
    "originCurrency": <value>,
    "destinationCurrency": <value>
}
```
Header Autorización

```
Authorization=bearer {token}
```

### Success Response

Response

```
HTTP/1.1 200 OK
{
    "idCurrency": <value>,
    "currencyNumericCode": <value>,
    "amountConverted": <value>,
    "currencyAbbreviation": <value>,
    "currencySymbol": <value>
}
```


### Error Response

401 Unauthorized

```
HTTP/1.1 401 Unauthorized
```

400 Bad Request

```
HTTP/1.1 400 Bad Request
{
    "error" : "{error motive}"
}
```
500 Server Error

```
HTTP/1.1 500 Server Error
{
    "error" : "{error motive}"
}
```

## <a name='convert-article-price'></a> Convert Article's Price
[Back to top](#top)

<p>Convert an article's price to a currency.</p>

```
	GET /v1/exchanger/articles/:articleId/
```


### Examples

Parametros:
Ciurrent: Lista de moneda separadas por ,, Ejemploe:

Body

```
{
    "currency": [<value>...]
}
```

Header Autorización

```
Authorization=bearer {token}
```

### Success Response

Response

```
HTTP/1.1 200 OK
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

401 Unauthorized

```
HTTP/1.1 401 Unauthorized
```

400 Bad Request

```
HTTP/1.1 400 Bad Request
{
    "error" : "{error motive}"
}
```
500 Server Error

```
HTTP/1.1 500 Server Error
{
    "error" : "{error motive}"
}
```
## <a name='$convert-cart-price-amount'></a> Convert Cart's Price Amount
[Back to top](#top)

<p>Obtiene el monto total de una orden y lo convierte a la moneda especificada.</p>

```
	GET /v1/exchanger/orders/:orderId
```


### Examples

Body

```
{
    "currency": [<value>...]
}
```

Header Autorización

```
Authorization=bearer {token}
```

### Success Response

Response

```
HTTP/1.1 200 OK
{
    {
        "orderId": <value>,
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
    },
    {...}
    
}
```


### Error Response

401 Unauthorized

```
HTTP/1.1 401 Unauthorized
```
400 Bad Request

```
HTTP/1.1 400 Bad Request
{
    "error" : "{error motive}"
}
```
500 Server Error

```
HTTP/1.1 500 Server Error
{
    "error" : "{error motive}"
}
```

# <a name='#cotizacion'></a> Cotización

## <a name='#obtener-cotizacion'></a> Obtener cotización

[Back to top](#top)

<p>Obtiene la cotización actual de una moneda con respecto a otra</p>

```
  GET /v1/exchanger/currency/price
```


### Examples

Body

```
{
    "monedasOrigen": <value>,
    "monedasDestino": <value>
}
```

Header Autorización

```
Authorization=bearer {token}
```

### Success Response

Response

```
HTTP/1.1 200 OK
{
    "originCurrency" {
        "idCurrency": <value>,
        "currencyNumericCode": <value>,
        "monto": <value>,
        "currencyAbbreviation": <value>,
        "currencySymbol": <value>
    },
    "destinationCurrency" {
        "idCurrency": <value>,
        "currencyNumericCode": <value>,
        "monto": <value>,
        "currencyAbbreviation": <value>,
        "currencySymbol": <value>
    }
}
```


### Error Response

401 Unauthorized

```
HTTP/1.1 401 Unauthorized
```
400 Bad Request

```
HTTP/1.1 400 Bad Request
{
    "error" : "{error motive}"
}
```
500 Server Error

```
HTTP/1.1 500 Server Error
{
    "error" : "{error motive}"
}
```

# <a name='#abm-monedas'></a> ABM Monedas

## <a name='#alta-moneda'></a> Alta Moneda

[Back to top](#top)

<p>Da de alta una nueva moneda. Se requiere rol de administrador.</p>

```
  POST /v1/exchanger/currency/
```

### Examples

Body

```
{
    "currencyNumericCode": <value>,
    "currencyAbbreviation": <value>,
    "currencySymbol": <value>,
    "descripcionMoneda": <value>,
    "accion":"ALTA"
}
```
Header Autorización

```
Authorization=bearer {token}
```

### Success Response

Response

```
HTTP/1.1 200 OK
{
    "idCurrency": <value>,
    "currencyNumericCode": <value>,
    "currencyAbbreviation": <value>,
    "currencySymbol": <value>,
    "descripcionMoneda": <value>
}
```


### Error Response

401 Unauthorized

```
HTTP/1.1 401 Unauthorized
```
400 Bad Request

```
HTTP/1.1 400 Bad Request
{
    "error" : "{error motive}"
}
```
500 Server Error

```
HTTP/1.1 500 Server Error
{
    "error" : "{error motive}"
}
```

## <a name='#baja-moneda'></a> Baja Moneda

[Back to top](#top)

<p>Da de baja una moneda (baja lógica). Se requiere rol de administrador.</p>

```
  DELETE /v1/exchanger/:currencyId/
```


### Examples

Body

```
{
    "idCurrency": <value>,
    "accion": "BAJA"
}
```
Header Autorización

```
Authorization=bearer {token}
```

### Success Response

200 Response

```
HTTP/1.1 200 OK
```


### Error Response

401 Unauthorized

```
HTTP/1.1 401 Unauthorized
```

400 Bad Request

```
HTTP/1.1 400 Bad Request
{
    "error" : "{error motive}"
}
```
500 Server Error

```
HTTP/1.1 500 Server Error
{
    "error" : "{error motive}"
}
```

## <a name='#modificar-moneda'></a> Modificar Moneda

[Back to top](#top)

<p>Realiza una modificación a una moneda. Se requiere rol de administrador.</p>

```
  POST /v1/exchanger/:currencyId/
```


### Examples

Body

```
{
    "currencyNumericCode": <value>,
    "currencyAbbreviation": <value>,
    "currencySymbol": <value>,
    "descripcionMoneda": <value>,
}
```
Header Autorización

```
Authorization=bearer {token}
```

### Success Response

Response

```
HTTP/1.1 200 OK
{
    "idCurrency": <value>,
    "currencyNumericCode": <value>,
    "currencyAbbreviation": <value>,
    "currencySymbol": <value>,
    "descripcionMoneda": <value>
}
```


### Error Response

401 Unauthorized

```
HTTP/1.1 401 Unauthorized
```
400 Bad Request

```
HTTP/1.1 400 Bad Request
{
    "error" : "{error motive}"
}
```
500 Server Error

```
HTTP/1.1 500 Server Error
{
    "error" : "{error motive}"
}
```
