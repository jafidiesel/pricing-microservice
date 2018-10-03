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

	GET /v1/exchange/:monto/:monedaOrigen/:monedaDestino



### Examples

Body

```
{
    "monto": "{monto}",
    "monedaOrigen": "{monedaOrigen}",
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
{
  "montoConvertido": "{montoConvertido}",
  "abreviaturaMoneda": "{abreviaturaMoneda}",
  "simboloMoneda": "{simboloMoneda}",
  "codigoNumericoMoneda": "{codigoNumericoMoneda}"
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

	GET /v1/articles/:articleId/:monedaDestino



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
{
  "montoConvertido": "{montoConvertido}",
  "abreviaturaMoneda": "{abreviaturaMoneda}",
  "simboloMoneda": "{simboloMoneda}",
  "codigoNumericoMoneda": "{codigoNumericoMoneda}"
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

	GET /v1/cart/:cartId/:monedaDestino



### Examples

Header Autorización

```
Authorization=bearer {token}
```

### Success Response

Respuesta

```
{
  "montoConvertido": "{montoConvertido}",
  "abreviaturaMoneda": "{abreviaturaMoneda}",
  "simboloMoneda": "{simboloMoneda}",
  "codigoNumericoMoneda": "{codigoNumericoMoneda}"
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

# <a name='abm-monedas'></a> ABM Monedas
