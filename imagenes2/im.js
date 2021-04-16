//Repetir el ejercicio anterior, pero en vez de cambiar la imagen grande cuando se clickean las imágenes chicas, hacerlo cuando se pasa el mouse por encima de las imágenes chicas.


const imgpequena1 = document.querySelector("#pequena1");
const imgpequena2 = document.querySelector("#pequena2");
const imgpequena3 = document.querySelector("#pequena3");
const igrande = document.querySelector("#grande");

const actualizarImagen = (imagen) => {
  igrande.src = imagen.src;
}

imgpequena1.addEventListener("mouseover",() =>{
   actualizarImagen(imgpequena1)
});

imgpequena2.addEventListener("mouseover",() =>{
  actualizarImagen(imgpequena2)
});
imgpequena3.addEventListener("mouseover",() =>{
  actualizarImagen(imgpequena3)
});