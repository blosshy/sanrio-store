/* FUNCION QUE RENDERIZA LOS PRODUCTOS DESTACADOS */
import { carritoIndex } from "./carritoDeCompras.js"; 

export const renderizarProductos = async (productos) => {
    productos.forEach(producto => {
        const contenedor = document.getElementById("swiper-container")
        let card = document.createElement("div")

        card.classList.add("swiper-slide", "d-flex", "flex-column", "justify-content-center");

        card.innerHTML = (`
            <div class="img-card-container">
                <img src="${producto.img}" alt="${producto.alt}"
                class="img-fluid card-size-img img-before">
                <img src="${producto.imghover}" alt="${producto.alt}"
                class="img-fluid card-size-img img-after">
            </div>
            <p class="product-name mt-3">${producto.nombre}</p>
            <span class="link-precio">$${producto.precio}</span>
            <div class="pb-3">
                <button class="boton-card" id="boton${producto.id}">Añadir al carro</button>
            </div> 
        `)
        
        contenedor.appendChild(card);

        let boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            carritoIndex(producto.id);
        });
    });
};