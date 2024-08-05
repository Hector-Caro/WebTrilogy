const boton = document.getElementById("Boton");

boton.addEventListener("click", function () {
    window.open("https://www.w3schools.com/", "_blank");
});
var Boton3 = document.getElementById('Boton3');


Boton3.addEventListener('click', function() {
   // Acciones a realizar al hacer clic en "Atrás"
   // Por ejemplo, volver a la página anterior
   window.location.href = "../html/info-js.html"; 
});

document.addEventListener("DOMContentLoaded", function() {
    var nombreGuardado = localStorage.getItem("nombre");
  
    if (!nombreGuardado) {

    } else {
      var mensajeGuardado = "¡Estimad@ " + nombreGuardado + ",";
      document.getElementById("saludo1").textContent = mensajeGuardado;
    }
});


