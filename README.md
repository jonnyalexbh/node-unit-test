# API Rest con Express y Unit Test con Mocha y Chai
Implementacion de pruebas unitarias a traves de los framework de pruebas Mocha y Chai en una API Rest

## Instalacion, configuracion y ejecucion
Las siguientes intrucciones permiten probar la api node-unit-test de forma local

### Instalacion
Clonar el proyecto node-unit-test en un directorio local
```
git clone https://github.com/josearivas/node-unit-test.git
```

### Configuracion
Descagar las dependencias del proyecto. Una vez descagado el proyecto, ubicarse en el directorio node-unit-test y ejecutar
```
npm install
```

### Ejecucion
Para ejecutar el proyecto, ubicarse en el directorio node-unit-test y ejecutar
```
npm run dev
```

La api estara expuesta en el hostname **localhost** y el puerto **3000**

## Prueba de la api node-unit-test
Se describen las operaciones expuesta por la api y como hacer uso de ellas.

La api maneja un solo recurso denominado ***books***. Inicialmente la api cuenta con data que permmite probar las operaciones con metodo GET. Estas las diferentes operaciones que se pueden hacer sobre el recurso ***books***

### Get All Books
##### URL 
http://localhost:3000/dsh/api/v1/books
##### METHOD
GET
##### HEADERS
[Accept:application/json]

### Get Book By Id
##### URL
http://localhost:3000/dsh/api/v1/books/{id}
##### METHOD
GET
##### HEADERS
[Accept:application/json]

### Create Book
##### URL
http://localhost:3000/dsh/api/v1/books
##### METHOD
POST
##### HEADERS
[Accept:application/json, Content-Type:application/json]
##### REQUEST
{ "title": "test1", "author": "Jose Rivas", "year": "2010", "edition": "test1" }