//utilizamos el módulo que instalamos el mySQL
const mysql = require("mysql");

// PASO 7: creamos una constante "conexión" y agregamos los parámetros
// Es un objeto del tipo clave-valor en donde ponemos los parámetros clásicos
// Localhost, user, password y database
// y posterior a esto debemos ir al entorno Dbeaver o PHPmyAdmin para crear la BD.
const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud_nodejs_db",
});

// PASO 8: creo la conexion con la BD que cree en phpmyadmin
conexion.connect((error) => {
    if (error) {
        console.error("El error de conexión es: " + error);
        return;
    }
    console.log("¡Conectado a la BD MySQL!");
});

module.exports = conexion;
