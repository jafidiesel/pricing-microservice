<a name="top"></a>
# Currency Exchange

Microservicio de Cambio de Moneda

- [Cambio de Moneda](#cambioDeMoneda)
  - [Convertir Monto](#convertir-monto)
  - [Convertir Monto Artículo](#convertir-monto-articulo)
  - [Convertir Monto Carrito](#convertir-monto-carrito)

- [Cotización](#cotizacion)
  - [Obtener Cotización](#obtener-cotizacion)

- [ABM Monedas](#abm-monedas)
  - [Alta Moneda](#alta-moneda)
  - [Baja Moneda](#baja-moneda)
  - [Modificación Moneda](#modificacion-moneda)

# <a name='cambioDeMoneda'></a> Cambio de moneda

## <a name='convertir-monto'></a> Convertir monto
[Back to top](#top)

<p>Convierte un monto enviado de una moneda especificada a otra moneda especificada</p>

```
	GET /v1/exchanger/
```


### Examples

Body

```
{
    "monto": <valor>,
    "monedaOrigen": <valor>,
    "monedaDestino": <valor>
}
```
Header Autorización

```
Authorization=bearer {token}
```

### Success Response

Respuesta

```
HTTP/1.1 200 OK
{
    "idMoneda": <valor>,
    "codigoNumericoMoneda": <valor>,
    "montoConvertido": <valor>,
    "abreviaturaMoneda": <valor>,
    "simboloMoneda": <valor>
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
    "error" : "{Motivo del error}"
}
```
500 Server Error

```
HTTP/1.1 500 Server Error
{
    "error" : "{Motivo del error}"
}
```

## <a name='convertir-monto-articulo'></a> Convertir Monto Artículo
[Back to top](#top)

<p>Convierte el monto de un artículo especificado a una moneda determinada</p>

```
	GET /v1/exchanger/articles/:articleId/
```


### Examples

Body

```
{
    "monedas": [<valor>...]
}
```

Header Autorización

```
Authorization=bearer {token}
```

### Success Response

Respuesta

```
HTTP/1.1 200 OK
{
    "articleId": <valor>,
    "conversions": {
        {
            "idMoneda": <valor>,
            "codigoNumericoMoneda": <valor>,
            "montoConvertido": <valor>,
            "abreviaturaMoneda": <valor>,
            "simboloMoneda": <valor>
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
    "error" : "{Motivo del error}"
}
```
500 Server Error

```
HTTP/1.1 500 Server Error
{
    "error" : "{Motivo del error}"
}
```
## <a name='convertir-monto-carrito'></a> Convertir Monto Carrito
[Back to top](#top)

<p>Obtiene el monto total de una orden y lo convierte a la moneda especificada.</p>

```
	GET /v1/exchanger/orders/:orderId
```


### Examples

Body

```
{
    "monedas": [<valor>...]
}
```

Header Autorización

```
Authorization=bearer {token}
```

### Success Response

Respuesta

```
HTTP/1.1 200 OK
{
    {
        "orderId": <valor>,
        "conversions": {
            {
                "idMoneda": <valor>,
                "codigoNumericoMoneda": <valor>,
                "montoConvertido": <valor>,
                "abreviaturaMoneda": <valor>,
                "simboloMoneda": <valor>
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
    "error" : "{Motivo del error}"
}
```
500 Server Error

```
HTTP/1.1 500 Server Error
{
    "error" : "{Motivo del error}"
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
    "monedasOrigen": <valor>,
    "monedasDestino": <valor>
}
```

Header Autorización

```
Authorization=bearer {token}
```

### Success Response

Respuesta

```
HTTP/1.1 200 OK
{
    "moneaOrigen" {
        "idMoneda": <value>,
        "codigoNumericoMoneda": <value>,
        "monto": <value>,
        "abreviaturaMoneda": <value>,
        "simboloMoneda": <value>
    },
    monedaDestino {
        "idMoneda": <value>,
        "codigoNumericoMoneda": <value>,
        "monto": <value>,
        "abreviaturaMoneda": <value>,
        "simboloMoneda": <value>
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
    "error" : "{Motivo del error}"
}
```
500 Server Error

```
HTTP/1.1 500 Server Error
{
    "error" : "{Motivo del error}"
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
    "codigoNumericoMoneda": <valor>,
    "abreviaturaMoneda": <valor>,
    "simboloMoneda": <valor>,
    "descripcionMoneda": <valor>,
    "accion":"ALTA"
}
```
Header Autorización

```
Authorization=bearer {token}
```

### Success Response

Respuesta

```
HTTP/1.1 200 OK
{
    "idMoneda": <valor>,
    "codigoNumericoMoneda": <valor>,
    "abreviaturaMoneda": <valor>,
    "simboloMoneda": <valor>,
    "descripcionMoneda": <valor>
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
    "error" : "{Motivo del error}"
}
```
500 Server Error

```
HTTP/1.1 500 Server Error
{
    "error" : "{Motivo del error}"
}
```

## <a name='#baja-moneda'></a> Baja Moneda

[Back to top](#top)

<p>Da de baja una moneda (baja lógica). Se requiere rol de administrador.</p>

```
  POST /v1/exchanger/currency/
```


### Examples

Body

```
{
    "idMoneda": <valor>,
    "accion": "BAJA"
}
```
Header Autorización

```
Authorization=bearer {token}
```

### Success Response

200 Respuesta

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
    "error" : "{Motivo del error}"
}
```
500 Server Error

```
HTTP/1.1 500 Server Error
{
    "error" : "{Motivo del error}"
}
```

## <a name='#modificar-moneda'></a> Modificar Moneda

[Back to top](#top)

<p>Realiza una modificación a una moneda. Se requiere rol de administrador.</p>

```
  POST /v1/exchanger/currency/
```


### Examples

Body

```
{
    "codigoNumericoMoneda": <valor>,
    "abreviaturaMoneda": <valor>,
    "simboloMoneda": <valor>,
    "descripcionMoneda": <valor>,
    "accion":"MODIFICAR"
}
```
Header Autorización

```
Authorization=bearer {token}
```

### Success Response

Respuesta

```
HTTP/1.1 200 OK
{
    "idMoneda": <valor>,
    "codigoNumericoMoneda": <valor>,
    "abreviaturaMoneda": <valor>,
    "simboloMoneda": <valor>,
    "descripcionMoneda": <valor>
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
    "error" : "{Motivo del error}"
}
```
500 Server Error

```
HTTP/1.1 500 Server Error
{
    "error" : "{Motivo del error}"
}
```
