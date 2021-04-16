const caja = document.querySelector(".container");
const boton1 = document.querySelector(".btn1");
const boton2 = document.querySelector(".btn2");
const boton3 = document.querySelector(".btn3");
const boton4 = document.querySelector(".btn4");
const boton5 = document.querySelector(".btn5");
const boton6 = document.querySelector(".btn6");

boton1.addEventListener("click", (event) => {
  caja.classList.add("btn1");
});

boton2.addEventListener("click", (event) => {
  caja.classList.add("btn2");
});
boton3.addEventListener("click", (event) => {
  caja.classList.add("btn3");
});
boton4.addEventListener("click", (event) => {
  caja.classList.add("btn4");
});
boton5.addEventListener("click", (event) => {
  caja.classList.add("btn5");
});
boton6.addEventListener("click", (event) => {
  caja.classList.add("btn6");
});


