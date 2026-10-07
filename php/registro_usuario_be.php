<?php
include 'conexion_be.php';

// Validar que los campos existan y no estén vacíos
if (
    empty($_POST['nombre_completo']) || 
    empty($_POST['correo']) || 
    empty($_POST['usuario']) || 
    empty($_POST['contrasena'])
) {
    echo '
        <script>
            alert("Por favor completa todos los campos");
            window.location = "../login.php";
        </script>
    ';
    exit();
}

$nombre_completo = trim($_POST['nombre_completo']);
$correo          = trim($_POST['correo']);
$usuario         = trim($_POST['usuario']);
$contrasena      = trim($_POST['contrasena']);

// Encriptar la contraseña antes de guardarla
$contrasena_hashed = password_hash($contrasena, PASSWORD_DEFAULT);

// Verificar si el correo ya existe
$verificar_correo = mysqli_query($conexion, "SELECT id_usuario FROM usuario WHERE correo='$correo' LIMIT 1");

if (mysqli_num_rows($verificar_correo) > 0) {
    echo '          
        <script>
            alert("⚠️ Este correo ya está registrado, intenta con otro");
            window.location = "../login.php";      
        </script>
    ';
    exit(); // Importante: salir para que no ejecute el INSERT
}

// Insertar el usuario
$query = "INSERT INTO usuario(nombre_completo, correo, usuario, contrasena) 
          VALUES('$nombre_completo', '$correo', '$usuario', '$contrasena_hashed')";

$ejecutar = mysqli_query($conexion, $query);

if ($ejecutar) {
    echo '          
        <script>
            alert("✅ Usuario almacenado exitosamente");
            window.location = "../login.php";      
        </script>
    ';
} else {
    echo '          
        <script>
            alert("❌ Inténtalo de nuevo, usuario no almacenado");
            window.location = "../login.php";      
        </script>
    ';
}

mysqli_close($conexion);
?>
