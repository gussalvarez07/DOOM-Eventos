const titulo = prompt ('Que titulo quieres mostrar en tu tarjeta?');
const imagenUrl = prompt ('Por favor ingresa una url de una imagen de tu animal favorito');
const articuloUrl = prompt('Por favor ingresa una url de algun articulo de tu interes');

//llamo los documentos del html
// document,getElementById("titulo").innerHTML ="texto a mostrar"
const tituloh1 = document.getElementById("titulo");
const img = document.getElementById("imagen");
const articulo = document.getElementById("articulo");
const card = document.getElementById("card")

tituloh1.innerHTML=titulo;
img.setAttribute("src",imagenUrl);
articulo.setAttribute("href", articuloUrl);
articulo.innerHTML= "Leer mas...";


// Para trabajar desde el DOM con atributos, getAttribute, setAttribute y removeAttribute
// getAttribute: elemento.getAttribute("atributo") / h1.getAttribute("id") / true o false
// setAtribute: elemento.setAttribute("atributo", "valor") / h1.setAttribute("id", "Nuevoid")
// removeAttribute: elemento.removeAttribute("atributo") / h1.removeAttribute("id")


//agregar los estilos
card.classList.add("fondorosa")
tituloh1.style = "color: red"
imagen.classList.add("tamano")
card.classList.add("tamaño")
