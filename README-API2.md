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
|  Monto | Number | <p>a convertir</p>|


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


