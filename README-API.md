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
	GET /v1/currency/:monedaOrigen/:monedaDestino
```


### Examples

Body

```
{
    "monto": "{monto}"
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
    "idMoneda": "{idMoneda}",  
    "codigoNumericoMoneda": "{codigoNumericoMoneda}",
    "montoConvertido": "{montoConvertido}",
    "abreviaturaMoneda": "{abreviaturaMoneda}",
    "simboloMoneda": "{simboloMoneda}"
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
    "path" : "{Nombre de la propiedad}",
    "message" : "{Motivo del error}"
}
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
	GET /v1/currency/:articleId/:monedaDestino
```


### Examples

Body

```
{
    "id": "{articleId}",
    "monedaDestino": "{monedaDestino}"
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
    "idMoneda": "{idMoneda}",
    "codigoNumericoMoneda": "{codigoNumericoMoneda}",
    "montoConvertido": "{montoConvertido}",
    "abreviaturaMoneda": "{abreviaturaMoneda}",
    "simboloMoneda": "{simboloMoneda}"
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
    "path" : "{Nombre de la propiedad}",
    "message" : "{Motivo del error}"
}
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

<p>Obtiene el monto total del carrito y lo convierte a la moneda especificada.</p>

```
	GET /v1/currency/:orderId/:monedaDestino
```


### Examples

Header Autorización

```
Authorization=bearer {token}
```

### Success Response

Respuesta

```
HTTP/1.1 200 OK
{
    "idMoneda": "{idMoneda}",
    "codigoNumericoMoneda": "{codigoNumericoMoneda}",
    "montoConvertido": "{montoConvertido}",
    "abreviaturaMoneda": "{abreviaturaMoneda}",
    "simboloMoneda": "{simboloMoneda}"
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
    "path" : "{Nombre de la propiedad}",
    "message" : "{Motivo del error}"
}
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

# <a name='cotizacion'></a> Cotización

## <a name='#obtener-cotizacion'></a> Obtener cotización

[Back to top](#top)

<p>Obtiene la cotización actual de una moneda con respecto a otra</p>

```
  GET /v1/currency/:monedaOrigen/:monedaDestino
```


### Examples


Header Autorización

```
Authorization=bearer {token}
```

### Success Response

Respuesta

```
HTTP/1.1 200 OK
{
    "idMoneda": "{idMoneda}",
    "codigoNumericoMoneda": "{codigoNumericoMoneda}",
    "montoConvertido": "{montoConvertido}",
    "abreviaturaMoneda": "{abreviaturaMoneda}",
    "simboloMoneda": "{simboloMoneda}"
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
    "path" : "{Nombre de la propiedad}",
    "message" : "{Motivo del error}"
}
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
  POST /v1/currency/
```



### Examples

Body

```
{
    "codigoNumericoMoneda": "{codigoNumericoMoneda}",
    "abreviaturaMoneda": "{abreviaturaMoneda}",
    "simboloMoneda": "{simboloMoneda}",
    "descripcionMoneda": "{descripcionMoneda}",
    "accion":"alta"
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
    "idMoneda": "{idMoneda}",
    "codigoNumericoMoneda": "{codigoNumericoMoneda}",
    "abreviaturaMoneda": "{abreviaturaMoneda}",
    "simboloMoneda": "{simboloMoneda}",
    "descripcionMoneda": "{descripcionMoneda}"
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
    "path" : "{Nombre de la propiedad}",
    "message" : "{Motivo del error}"
}
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

<p>Da de baja una moneda. Se requiere rol de administrador.</p>

```
  POST /v1/currency/
```


### Examples

Body

```
{
    "idMoneda": "{idMoneda}",
    "accion": "baja"
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
    "path" : "{Nombre de la propiedad}",
    "message" : "{Motivo del error}"
}
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
  POST /v1/currency/
```


### Examples

Body

```
{
    "codigoNumericoMoneda": "{codigoNumericoMoneda}",
    "abreviaturaMoneda": "{abreviaturaMoneda}",
    "simboloMoneda": "{simboloMoneda}",
    "descripcionMoneda": "{descripcionMoneda}",
    "accion":"modificar"
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
    "idMoneda": "{idMoneda}",
    "codigoNumericoMoneda": "{codigoNumericoMoneda}",
    "abreviaturaMoneda": "{abreviaturaMoneda}",
    "simboloMoneda": "{simboloMoneda}",
    "descripcionMoneda": "{descripcionMoneda}"
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
    "path" : "{Nombre de la propiedad}",
    "message" : "{Motivo del error}"
}
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
