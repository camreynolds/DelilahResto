# DelilahResto
Proyecto #3 Delilah Restó

API para pedidos de comida deliciosa. Como cliente podras registrarle, ver el listado de nuestros productos y realizar una orden. Los administradores del restaurante tienen la posibilidad de recibir pedidos y actualizarlos.

## Comenzando

Estas instrucciones te permitirán obtener una copia del proyecto en tu máquina local para propósitos de pruebas y desarrollo.

### Pre-requisitos
#### 1. Instalar Nodejs
* [Descargar NODEJS](https://nodejs.org/es/download/)

#### 2. XAMPP
XAMPP es una distribución de Apache completamente gratuita y fácil de instalar que contiene MariaDB, PHP y Perl.

* [Descargar XAMPP](https://www.apachefriends.org/download.html)

## Despliegue
### 1 - Clonar el proyecto
Clonar el repositorio desde el [DelilahResto](https://github.com/seba365/DelilahResto)

Desde la consola con el siguiente comando:
```
git clone https://github.com/seba365/DelilahResto.git .
```

### 2 - Instalación de dependencias
Ejecutar el siguiente comando para instalar todas las dependencias:
```
npm install
```

### 3 - Creando la Base de datos

**3.1 -** Abrir XAMPP e iniciar los servicios de Apache y MySQL.

**3.2 -** Abrir el panel de control del servicio MySQL presionando el botón **Admin** ó bien usar el siguiente link: **http://localhost/phpmyadmin/**

**3.3 -** Para genererar la bases de datos y sus objetos, ir al panel de control de la base de datos y ejecutar y/o importar los siguientes archivos ***.sql**:

  - Ir al directorio /scriptsDB:
    - **delilarestoDB.sql:**
      - Crea la Base de datos **delilahresto**.
      - Crea la tabla **USERS**.
      - Crea la tabla **PRODUCTS**.
      - Crea la tabla **ORDERSTATUS**.
      - Crea la tabla **ORDERS**.
      - Crea la tabla **ORDERDETAILS**.
      - Genera el usuario: **admin** con la password: **admin123**
      - Genera los estados de los pedidos



## Documentación de la API
Los endpoinhts se detallan en el archivo **spec.yml**. Para visualizar los endpoints se debe copiar y/o importar el contenido en **[Swagger](https://editor.swagger.io/)**.

A continuación, se muestra un breve resumen de todos los endpoints.

**URL: http://localhost:4001/**
| Métodos | Endpoints | Descripción | Rol |
| :---: | :---: | :---: | :---: |
| POST | /auth/login | Inicio de sesión en sistema | all |
| GET | /users/all | Obtiene el listado de todos los usuarios | admin |
| GET | /users | Obtiene los datos del usuario que inició la sesión | all |
| PUT | /users | Modifica los datos del usuario que inició la sesión | all |
| POST | /users | Crea un nuevo usuario | all |
| GET | /products | Obtiene el listado de todos los productos | all |
| GET | /products/{id} | Obtiene un producto | all |
| POST | /products | Crea un nuevo producto | admin |
| PUT | /products/{id} | Modifica un nuevo producto | admin |
| DELETE | /products/{id} | Elimina un nuevo producto | admin |
| GET | /orders/all | Obtiene el listado de todos los pedidos | admin |
| GET | /orders | Obtiene todos los pedidos del usuario que inició la sesión | all |
| POST | /orders | Crea un pedido del usuario que inició la sesión | all |
| PUT | /orders/{id} | Modifica el estado de un pedido | admin |
| DELETE | /orders/{id} | Elimina un pedido | admin |

## Recursos y tecnologías utilizadas

   - Nodejs
   - Express
   - MySQL
   - JWT
   - Dotenv
   - Bcryptjs
   - Moment
   - Cors
   - Postman
   - Swagger
   - XAMPP
   
   
## Autores
* **Díaz Sebastian** - [Github-seba365](https://github.com/seba365)
