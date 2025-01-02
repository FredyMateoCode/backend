warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/.env b/.env[m
[1mindex efee31a..8d76073 100644[m
[1m--- a/.env[m
[1m+++ b/.env[m
[36m@@ -1,8 +1,8 @@[m
 # Variables de conexión a la base de datos[m
[31m-DB_HOST=localhost[m
[31m-DB_USER=root[m
[31m-DB_PASSWORD=27922418[m
[31m-DB_NAME=motos[m
[32m+[m[32mDB_HOST=sql301.infinityfree.com[m
[32m+[m[32mDB_USER=if0_37899111[m
[32m+[m[32mDB_PASSWORD=QAgplaJQvTcvUdl[m
[32m+[m[32mDB_NAME=if0_37899111_motos[m
 [m
 # Variables de JWT[m
 JWT_SECRET=HolaMundo[m
\ No newline at end of file[m
[1mdiff --git a/app.js b/app.js[m
[1mindex e423a70..ae4c2be 100644[m
[1m--- a/app.js[m
[1m+++ b/app.js[m
[36m@@ -1,7 +1,7 @@[m
 //IMPORTACIÓN DE LIBRERÍAS:[m
 const express = require('express');//Importamos el framework express para el manejo de rutas y crear el servidor.[m
 const app = express(); //Instancia para crear el servidor y el manejo de rutas.[m
[31m-//const cors = require('cors');//Para manejar solicitudes de diferentes dominios, como mecanismo de seguridad.[m
[32m+[m[32mconst cors = require('cors');//Para manejar solicitudes de diferentes dominios, como mecanismo de seguridad.[m
 const corsOptions = {[m
     origin: 'https://frontend-1szo.onrender.com',  // URL de tu frontend en Render[m
     methods: ['GET', 'POST', 'PUT', 'DELETE'],[m
[1mdiff --git a/configuracion/conexion.js b/configuracion/conexion.js[m
[1mindex 29e4075..b306383 100644[m
[1m--- a/configuracion/conexion.js[m
[1m+++ b/configuracion/conexion.js[m
[36m@@ -12,7 +12,7 @@[m [mconexion.connect((error) => {[m
     if (error) {[m
         console.error('Error de conexión a MySQL:', error);[m
     } else {[m
[31m-        console.log('Conexión exitosa a la Base de Datos Motos');[m
[32m+[m[32m        console.log('Conexión exitosa a la Base de Datos Motos de Infinity Free');[m
     }[m
 });[m
 [m
[1mdiff --git a/package.json b/package.json[m
[1mindex d7ea63d..2b24e4c 100644[m
[1m--- a/package.json[m
[1m+++ b/package.json[m
[36m@@ -3,7 +3,8 @@[m
   "version": "1.0.0",[m
   "main": "index.js",[m
   "scripts": {[m
[31m-    "test": "echo \"Error: no test specified\" && exit 1"[m
[32m+[m[32m    "start": "node app.js",[m
[32m+[m[32m    "dev": "nodemon app.js"[m
   },[m
   "keywords": [],[m
   "author": "Fredy_Mateo",[m
