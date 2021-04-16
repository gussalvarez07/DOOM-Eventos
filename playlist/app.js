const button = document.getElementById("boton");


const agregarCancion = () => {
    const cancion = prompt ("Ingrese el nombre de la cancion que quieres")

const lista = document.querySelector("ul")
lista.innerHTML = cancion 
};
button.addEventListener("click", agregarCancion) ;