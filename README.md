# CurrencyExchange-Microservice
El conversor de moneda nos permitirá convertir un monto de una moneda a otra. Esto se puede lograr de varias formas:

- Convertir un monto especificando de una moneda B a una moneda A
- Convertir el precio de un articulo a una moneda B
- Convertir el monto total de una orden a una moneda B

Además nos permitirá:

- Obtener la última cotización de una moneta B con respecto a una moneda A
- Realizar ABM de monedas


## **Casos de uso**:

### Convertir un monto especificando de una moneda B a una moneda A

- Si bien esta llamada puede realizarse en cualquier método, no se pensó una aplicación específica.

### Convertir el precio de un articulo a una moneda B

- Pensado para ser utilizado cuando se consulta los datos de un artículo (ej. ver información de un artículo )

### Convertir el monto total de una orden a una moneda B

- Pensado para convertir el monto total de una orden a una moneda. Esto generalmente se da cuando hemos llegado al paso final previo a comprar en donde se nos muestra la información completa de la orden (precio, cantidad de articulos, etc)

## Dependencias

### Auth

Para realizar cualquier acción es necesario estar logueado.

### Catalog

Se consulta el catalogo para obtener información pertinente del artículo(ej. el monto y la moneda)

### Order

Se consulta información de la orden por ID para obtener el monto total.

### Node 8

Seguir los pasos de instalación del sitio oficial

[nodejs.org](https://nodejs.org/en/)

### MongoDb

Ver tutorial de instalación en [README.md](../README.md) en la raíz.

Para ejecutar mongo debemos levantar **mongodb service**:

```
sudo systemctl start mongod
sudo systemctl enable mongod
```

Para confirmar que esten andando debemos ejecutar

```
// Check ports in use
netstat -plntu | grep 27017

// Check service status
sudo service mongod status
```

Luego debemos ejecutar
```
mongo
```

y 
```
mongodb-compass
```

Fuente: https://scotch.io/@micwanyoike/getting-started-with-mongodb-in-linux


## RabbitMQ
```
rabbitmqctl start_app
rabbitmqctl stop_app
rabbitmqctl cluster_status
```
fuente: https://linux.die.net/man/1/rabbitmqctl

#### Best practices to design APIs with AMQP

http://www.thedevpiece.com/best-practices-to-design-apis-with-amqp/

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
apidoc -o src/apidoc
apidoc-markdown2 -p src/apidoc -o README-API.md
```

Esto nos genera una carpeta src con la documentación, esta carpeta debe estar presente desde donde se ejecute el proyecto, aunque se puede configurar desde el archivo de properties.


## webpack + babel7

**Webpack** is a module bundler. Webpack can take care of bundling alongside a separate task runner. However, the line between bundler and task runner has become blurred thanks to community developed webpack plugins. Sometimes these plugins are used to perform tasks that are usually done outside of webpack, such as cleaning the build directory or deploying the build.

**Babel** is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

[How to install and cofigure webpack + babel7](https://medium.com/oredi/webpack-with-babel-7-b61f7caa9565)

Una vez que tenemos instalado y configurado webpack + babel7 corremos el siguiente comando para transpilar de ES6 a ES5 y "empaquetar" el código:
```
npm run build
```