//elementos del DOM
const cantidadElemento = document.querySelector("#cantidad");
const valorTotalElemento = document.querySelector("#valor-total");
const precioInicialElemento = document.querySelector("#precio-inicial");
const botonsumar = document.querySelector("#sumar");
const botonrestar = document.querySelector("#restar");


precioInicialElemento.textContent = "400000"; // precio base del producto


var cantidad = 0; // variable Cantidad inicial

// eventos clic para incrementar o disminuir la cantidad
botonsumar.onclick = () => {
    document.querySelector("#cantidad").innerHTML++;
    document.querySelector("#valor-total").innerHTML = 
        Number(document.querySelector("#cantidad").innerHTML) * 
        Number(document.querySelector("#precio-inicial").innerHTML);
};

botonrestar.onclick = () => {
    document.querySelector("#cantidad").innerHTML = 
        Number(document.querySelector("#cantidad").innerHTML) - 1
    document.querySelector("#valor-total").innerHTML = 
        Number(document.querySelector("#cantidad").innerHTML) * 
        Number(document.querySelector("#precio-inicial").innerHTML);
};