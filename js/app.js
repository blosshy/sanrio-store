/* FUNCION QUE RENDERIZA LOS PRODUCTOS DESTACADOS */

export const renderizarProductos = async (productos) =>{
    productos.forEach(producto => {
        const contenedor = document.getElementById("swiper-container")
        let card = document.createElement("div")
        card.innerHTML(`
        <div class="swiper-slide d-flex flex-column justify-content-center">
            <div class="img-card-container">
                <img src="${producto.img}" alt="${producto.alt}"
                class="img-fluid card-size-img img-before">
                <img src="${producto.img-hover}" alt="${producto.alt}"
                class="img-fluid card-size-img img-after">
            </div>
            <p class="product-name mt-3">${producto.nombre}</p>
            <span class="link-precio">${producto.precio}</span>
            <div class="pb-3">
                <a href="#" class="links-boton">
                    <div class="boton-card">
                        <span class="link-carrito">Añadir al carro</span>
                    </div>
                </a>
        </div>
        `)

        contenedor.appendChild(card);
    });
}