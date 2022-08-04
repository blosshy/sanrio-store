import { renderizarProductos } from "./app.js";
import { actualizarCarrito, refrescarCarrito } from "./carritoDeCompras.js";

document.addEventListener("DOMContentLoaded", () =>{
    (async () => {
        try {
            const response = await fetch("js/data.json");
            const data = await response.json();

            await renderizarProductos(data);
        } catch (error) {
            console.log(error);
        }
    })();

    /* CONDICIONAL QUE ME PERMITE RENDERIZAR CARRITO EN STORAGE */

    if (localStorage.getItem("carrito")) {
        const carritoStorage = JSON.parse(localStorage.getItem("carrito"));
        refrescarCarrito(carritoStorage);
        actualizarCarrito(carritoStorage);
    }
}); 

/* FUNCION QUE ME TRAIGA LOS DATOS JSON */

export const getData = async () => {
    try {
        const response = await fetch("js/data.json");
        const data = await response.json();
        return data;      
    } catch (error) {
        console.log(error);
    }};