// Selecciona el botón
let boton = document.getElementById("boton_arriba");

// Agrega un evento al scroll
window.onscroll = function() {
    mostrarBoton();
  };

  function mostrarBoton() {
    // Obtén la posición actual del scroll
    let posicionScroll = document.documentElement.scrollTop;
  
    // Muestra el botón si se supera una posición específica (ejemplo: 300px)
    if (posicionScroll > 2000) {
      boton.style.display = "block"; // Muestra el botón
    } else {
      boton.style.display = "none"; // Oculta el botón
    }
  }