import {
    getData
} from "./index.js"

/* VARIABLE QUE CONTIENE LOS PRODUCTOS */

let productos = await getData();

/* FUNCION QUE CONTROLA QUE PRODUCTO SE AGREGA AL CARRITO */

export const carritoIndex = (productoID) => {
    let carritoDeCompras = [];

    if (localStorage.getItem("carrito")) {
        carritoDeCompras = obtenerCarritoStorage();
    }

     let productoRepetido = carritoDeCompras.find(producto => producto.id == productoID);
    productosRepetidos(productoRepetido, productoID, carritoDeCompras);   
}

/* FUNCION QUE CONTROLA LA RENDERIZACION DE PRODUCTOS REPETIDOS Y SU CANTIDAD*/

const productosRepetidos = (productoRepetido, productoID, carritoDeCompras) => {
    if (productoRepetido) {
        productoRepetido.cantidad++
        document.getElementById(`cantidad${productoRepetido.id}`).innerHTML = `<p id=cantidad${productoRepetido.cantidad}>Cantidad: ${productoRepetido.cantidad}</p>`;
        actualizarCarrito(carritoDeCompras);
    } else {
        agregarProductoAlCarrito(productoID, carritoDeCompras);
    }
}

/* FUNCION QUE AGREGA Y RENDERIZA PRODUCTOS AL CARRITO */

const agregarProductoAlCarrito = (productoID, carritoDeCompras) => {
    const contenedor = document.getElementById("modalcontainer");
    const producto = productos.find(producto => producto.id == productoID);
    carritoDeCompras.push(producto);

    const div = document.createElement("div");
    div.innerHTML = `<div class="container">
                        <div class="row mt-2 mb-4 mt-4">
                            <div class="col-md-3"></div>
                            <div class="col-md-3 mt-2 mb-4 mt-4">
                                <img src="${producto.img}" alt="${producto.alt}"
                                class="img-fluid img-modal img-before">
                            </div>
                        <div class="col-md-3 mt-2 mb-4 mt-4">
                            <h2 class="titulo-modal">${producto.nombre}</h2>
                            <p class="texto-modal" id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                            <p class="texto-modal">Precio: $${producto.precio}</p>
                            <button id=eliminar${producto.id} class="boton-eliminar" value="${producto.id}">X</button>
                        </div>
                        <div class="col-md-3"></div>
                        </div>
                    </div>
                    `
    contenedor.appendChild(div);
    actualizarCarrito(carritoDeCompras);
}

/* FUNCION QUE ME REFRESCA LA RENDERIZACION DEL CARRITO  */

export const refrescarCarrito = (carritoDeCompras) => {
    const contenedor = document.getElementById("modalcontainer");

    contenedor.innerHTML = "";  
        carritoDeCompras.forEach(producto => {
            const div = document.createElement("div");
            div.innerHTML = `<div class="container">
                            <div class="row mt-2 mb-4 mt-4">
                                <div class="col-md-3"></div>
                                <div class="col-md-3 mt-2 mb-4 mt-4">
                                    <img src="${producto.img}" alt="${producto.alt}"
                                    class="img-fluid img-modal img-before">
                                </div>
                            <div class="col-md-3 mt-2 mb-4 mt-4">
                                <h2 class="titulo-modal">${producto.nombre}</h2>
                                <p class="texto-modal" id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                                <p class="texto-modal">Precio: $${producto.precio}</p>
                                <button id=eliminar${producto.id} class="boton-eliminar" value="${producto.id}">X</button>
                            </div>
                            <div class="col-md-3"></div>
                            </div>
                        </div>
                        `
            contenedor.appendChild(div);
        });
};


/* FUNCION QUE TRAE CARRITO YA EXISTENTE */

const obtenerCarritoStorage = () => {
    const carritoStorage = JSON.parse(localStorage.getItem("carrito"));
    return carritoStorage;
};

/* FUNCION QUE ACTUALIZA EL PRECIO TOTAL DEL CARRO */

let precioTotal = document.getElementById("precioTotal");

export const actualizarCarrito = (carritoDeCompras) => {
    precioTotal.innerText = "Precio Total: $" + carritoDeCompras.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
    localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
};

/* FUNCION PARA ELIMINAR PRODUCTOS CON DELEGACION DE EVENTOS */

export const eliminarProductoCarrito = (productoId) => {
    const carritoStorage = obtenerCarritoStorage();
    const carritoActualizado = carritoStorage.filter( producto => producto.id != productoId);

    actualizarCarrito(carritoActualizado);
    refrescarCarrito(carritoActualizado);
}

/* TRAIGO EL MODAL PARA AGREGARLE EL EVENTO CLICK A LOS BOTONES DE ELIMINAR */
const modalCarrito = document.getElementById("modalcontainer")
modalCarrito.addEventListener("click", (e) => {
    e.stopPropagation();
    if (e.target.classList.contains("boton-eliminar")) {
        eliminarProductoCarrito(e.target.value)
    }
})