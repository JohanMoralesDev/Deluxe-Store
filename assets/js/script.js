const botonAbrirBuscador = document.getElementById("abrirBuscador");
const campoBuscar = document.getElementById("campoBuscar");

if (botonAbrirBuscador && campoBuscar) {
  botonAbrirBuscador.addEventListener("click", () => {
    campoBuscar.classList.toggle("activo");

    if (campoBuscar.classList.contains("activo")) {
      const input = campoBuscar.querySelector("input");
      if (inpuBuscar) inputBuscar.focus();
    }
  });
}

const botonDescubrirMas = document.querySelector(".Nueva.coleccion .Boton");
const seccionMasVendidos = document.querySelector(".Mas.vendidos");

if (botonDescubrirMas && seccionMasVendidos) {
  botonDescubrirMas.addEventListener("click", () => {
    seccionMasVendidos.scrollIntoView({ behavior: "smooth" });
  });
}

const botonesAnadirCarrito = document.querySelectorAll(".Productos .Boton");
const enlaceCarrito = document.querySelector('a[href="#Carrito"]');

let totalCarrito = 0;
let contadorCarrito = 0;

if (enlaceCarrito) {
  contadorCarrito = document.createElement("span");
  contadorCarrito.className = "contador-carrito";
  contadorCarrito.textContent = "0";
  enlaceCarrito.appendChild(contadorCarrito);
}

botonesAnadirCarrito.forEach((boton) => {
  boton.addEventListener("click", () => {
    totalCarrito++;

    if (contadorCarrito) {
      contadorCarrito.textContent = totalCarrito;
    }

    const textoOriginal = boton.textContent;

    boton.textContent = "Añadido";
    boton.disabled = true;

    setTimeout(() => {
      boton.textContent = textoOriginal;
      boton.disabled = false;
    }, 1000);
  });
});

document.querySelectorAll('a[href^="#"]').forEach((enlace) => {
  enlace.addEventListener("click", (evento) => {
    const idDestino = enlace.getAttribute("href").slice(1);
    const elementoDestino = document.getElementById(idDestino);

    if (elementoDestino) {
      evento.preventDefault();
      elementoDestino.scrollIntoView({ behavior: "smooth" });
    }
  });
});

//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

    //FUNCIONES

function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
}