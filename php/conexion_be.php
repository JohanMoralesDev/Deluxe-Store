<?php
$conexion = mysqli_connect("localhost", "root", "", "login_registro_db");

if (!$conexion) {
    die("Error en la conexión: " . mysqli_connect_error());
} else {
     echo "Conexión exitosa"; // Para pruebas
}
?>