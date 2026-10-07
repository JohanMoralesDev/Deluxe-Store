<?php
$conexion = mysqli_connect("localhost", "root", "", "softime_tech_solutions");

if (!$conexion) {
    die("Error en la conexión: " . mysqli_connect_error());
} else {
     echo "Conexión exitosa"; // Para pruebas
}
?>