/* Funcion de la pagina de inicio */

document.addEventListener("DOMContentLoaded", function() {
  var nombreGuardado = localStorage.getItem("nombre");

  if (!nombreGuardado) {
    var nombre = prompt("Por favor, ingresa tu nombre:");
    if (nombre != null && nombre != "") {
      var mensaje = "¡Hola, " + nombre + "! Bienvenid@.";
      document.getElementById("saludo").textContent = mensaje;
      localStorage.setItem("nombre", nombre);
    }
  } else {
    var mensajeGuardado = "¡Hola, " + nombreGuardado + "! Bienvenid@.";
    document.getElementById("saludo").textContent = mensajeGuardado;
  }
})

/* Funcion de los botones atra y siguiente*/

var Boton = document.getElementById('Boton');
var Boton1= document.getElementById('Boton1');


Boton.addEventListener('click', function() {
   // Acciones a realizar al hacer clic en "Atrás"
   // Por ejemplo, volver a la página anterior
   window.location.href = "../index.html"; 
});

Boton1.addEventListener('click', function() {
   // Acciones a realizar al hacer clic en "Siguiente"
   // Por ejemplo, redireccionar a la siguiente página
   window.location.href = '../html/info-css.html';
});



/* boton siguiente y atras en js */

Boton.addEventListener('click', function() {
  // Acciones a realizar al hacer clic en "Atrás"
  // Por ejemplo, volver a la página anterior
  window.location.href = "../html/info-css.html"; 
});

Boton1.addEventListener('click', function() {
  // Acciones a realizar al hacer clic en "Siguiente"
  // Por ejemplo, redireccionar a la siguiente página
  window.location.href = '../html/masinfo.html';
});

/* Funcion del boton a replit */

var Boton2 = document.getElementById('Boton2');

Boton2.addEventListener("click", function () {
   window.open("https://replit.com/@HECTOR-ESTIVEN1?path=folder/", "_blank");
});



/*Scroll inicio*/
const contenedor = document.querySelector('.contenedor');

// Función para controlar la animación al hacer scroll
function handleScrollAnimation() {
  const elementPosition = contenedor.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (elementPosition < windowHeight * 0.75) {
    contenedor.classList.add('aparecer');
  }
}

// Escuchar el evento de scroll y activar la animación
window.addEventListener('scroll', handleScrollAnimation);

// Activar la animación al cargar la página (si el elemento ya está visible)
handleScrollAnimation();