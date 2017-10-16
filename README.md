# API Rest con Express y Unit Test con Mocha y Chai
Implementacion de pruebas unitarias a traves de los frameworks Mocha y Chai en una API Rest con Express

## Instalacion, configuracion y ejecucion
Las siguientes intrucciones permiten probar la api node-unit-test de forma local

### Instalacion
Clonar el proyecto node-unit-test en un directorio local
```
git clone https://github.com/josearivas/node-unit-test.git
```

### Configuracion
Dirigirse al directorio raiz del proyecto y descagar las dependencias
```
npm install
```

### Ejecucion
Ejecutar la aplicacion con Express que expone la API Rest
```
npm start
```

La api estara expuesta en el hostname **localhost** y el puerto **3000**

## Prueba de la api node-unit-test
Se describen las operaciones expuesta por la api y como hacer uso de ellas.

La api maneja un solo recurso denominado ***books***. Inicialmente la api cuenta con data que permmite probar las operaciones con metodo GET. Estas son las diferentes operaciones que se pueden hacer sobre el recurso ***books***

### Get All Books
**Url:** http://localhost:3000/dsh/api/v1/books  
**Method:** GET  
**Headers:** [Accept:application/json]  

### Get Book By Id
**Url:** http://localhost:3000/dsh/api/v1/books/{id}  
**Method:** GET  
**Headers:** [Accept:application/json]  

### Add Book
**Url:** http://localhost:3000/dsh/api/v1/books  
**Method:** POST  
**Headers:** [Accept:application/json, Content-Type:application/json]  
**Request:** { "title": "test1", "author": "Jose Rivas", "year": "2010", "edition": "test1" }  