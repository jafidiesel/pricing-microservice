# CurrencyExchange-Microservice
El conversor de moneda nos permitirá convertir un monto de una moneda a otra. Esto se puede lograr de varias formas:

- Convertir un monto especificando de una moneda B a una moneda A
- Convertir un el precio de un articulo a una moneda B
- Convertir el monto total de un carrito a una moneda B

Además nos permitirá:

- Obtener la última cotización de una moneta B con respecto a una moneda A
- Realizar ABM de monedas

## Dependencias

### Auth

Para realizar cualquier acción es necesario estar logueado.

### Catalog

Se consulta el catalogo para obtener información pertinente del artículo(ej. el monto y la moneda)

### Cart

Se consulta información del carrito por ID para obtener el monto total.

## Apidoc

Apidoc es una herramienta que genera documentación de apis para proyectos node (ver [Apidoc](http://apidocjs.com/)).

El microservicio muestra la documentación como archivos estáticos si se abre en un browser la raíz del servidor [localhost:3004](http://localhost:3004/)

Ademas se genera la documentación en formato markdown.

Para que funcione correctamente hay que instalarla globalmente con

```bash
npm install apidoc -g
npm install -g apidoc-markdown2
```

La documentación necesita ser generada manualmente ejecutando la siguiente linea en la carpeta raíz :

```bash
apidoc -o www
apidoc-markdown2 -p www -o README-API.md
```

Esto nos genera una carpeta www con la documentación, esta carpeta debe estar presente desde donde se ejecute el proyecto, aunque se puede configurar desde el archivo de properties.
