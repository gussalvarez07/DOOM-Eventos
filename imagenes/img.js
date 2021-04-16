//Crear un documento html con al menos 4 imágenes chicas (100px de alto) y una imagen grande (500px de alto). Cuando se clickean las imágenes chicas, la imagen grande se tiene que actualizar con la misma que la imagen chica clickeada.


const imgpequena1 = document.querySelector("#pequena1");
const imgpequena2 = document.querySelector("#pequena2");
const imgpequena3 = document.querySelector("#pequena3");
const igrande = document.querySelector("#grande");

const actualizarImagen = (imagen) => {
  igrande.src = imagen.src;
}

imgpequena1.addEventListener("click",() =>{
   actualizarImagen(imgpequena1)
});

imgpequena2.addEventListener("click",() =>{
  actualizarImagen(imgpequena2)
});
imgpequena3.addEventListener("click",() =>{
  actualizarImagen(imgpequena3)
});