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
npm i
```

### 3 - Creando la Base de datos
**3.1 -** Abrir XAMPP e iniciar los servicios de Apache y MySQL.
**3.2 -** Abrir el panel de control del servicio MySQL presionando el botón **Admin** ó bien usar el siguiente link: **http://localhost/phpmyadmin/**
**3.3 -** Para genererar la bases de datos y sus objetos, ir al panel de control de la base de datos y ejecutar y/o importar los siguientes archivos ***.sql**:
  - Ir al directorio /scriptsDB:
    **- 00_db.sql** - Crea la Base de datos **delilahresto**.
    **- 01_users.sql** - Crea la tabla **USERS**.
    **- 03_products.sql** - Crea la tabla **PRODUCTS**.
    **- 04_orderstatus.sql** - Crea la tabla **ORDERSTATUS**.
    **- 05_orders.sql** - Crea la tabla **ORDERS**.
    **- 06_orderdetails.sql** - Crea la tabla **ORDERDETAILS**.
    **- 07_insert_user_admin.sql** - Genera el usuario: **admin** con la password: **admin123**
    **- 08_insert_orderstatus.sql** - Genera los estados de los pedidos

## Construido con

   - Nodejs
   - Express
   - MySQL
   - JWT
   - Dotenv
   - Bcryptjs
   - Moment
   - Cors
   
## Autores
* **Díaz Sebastian** - [Github-seba365](https://github.com/seba365)
