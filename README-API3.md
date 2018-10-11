<a name="top"></a>
# currencyexchange-microservice v1.0.0

Currency exchange microservice

- [Convert](#convert)
	- [Convertir Monto](#convertir-monto)
	


# <a name='convert'></a> Convert

## <a name='convertir-monto'></a> Convertir Monto
[Back to top](#top)

<p>Convierte un monto enviado de una moneda especificada a otra moneda especificada</p>

	GET /v1/currency/:monedaOrigen/:monedaDestino





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  monto | Number | <p>Monto a convertir</p>|


### Success Response

Success-Response:

```
HTTP/1.1 200 Ok
{
    "idMoneda": "{idMoneda}",  
    "codigoNumericoMoneda": "{codigoNumericoMoneda}",
    "montoConvertido": "{montoConvertido}",
    "abreviaturaMoneda": "{abreviaturaMoneda}",
    "simboloMoneda": "{simboloMoneda}"
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
