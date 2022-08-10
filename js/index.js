import { renderizarProductos } from "./app.js";
import { actualizarCarrito, refrescarCarrito } from "./carritoDeCompras.js";

document.addEventListener("DOMContentLoaded", () => {
    (async () => {
        try {
            const response = await fetch("js/data.json");
            const data = await response.json();

            await renderizarProductos(data);

            /* CONDICIONAL QUE ME PERMITE RENDERIZAR CARRITO EN STORAGE */
            const carritoAlmacenado = JSON.parse(localStorage.getItem("carrito"));

            if (carritoAlmacenado) {
                const carritoenStorage = JSON.parse(localStorage.getItem("carrito"));
                refrescarCarrito(carritoenStorage);
                actualizarCarrito(carritoenStorage);
            }
        } catch (error) {
            console.log(error);
        }
    })();
});

/* FUNCION QUE ME TRAIGA LOS DATOS JSON */

export const getData = async () => {
    try {
        const response = await fetch("js/data.json");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};