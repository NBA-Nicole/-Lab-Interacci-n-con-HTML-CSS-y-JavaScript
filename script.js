const titulo = document.getElementById("saludo");
titulo.textContent = "Adiós";
const tituloNaranja = document.getElementById("naranja");
tituloNaranja.style.color = "orange";
const tituloClic = document.getElementById("clic");

tituloClic.addEventListener("click", function () {
  tituloClic.style.color = "brown";
});