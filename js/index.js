import { renderizarProductos } from "./app.js";

document.addEventListener("DOMContentLoaded", () =>{
    (async () => {
        try {
            const response = await fetch("./data.json");
            const data = await response.json();

            await renderizarProductos(data);
        } catch (error) {
        }
    })();
});