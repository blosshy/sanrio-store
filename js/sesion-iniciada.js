/* BOTON MENU-DESPEGABLE EN EL INDEX LUEGO DE INCIAR SESION */

if (sessionStorage.getItem("sesion") == "true") {
    const navbar = document.getElementById("usuarioregistrado");

    let usuarioStorage = JSON.parse(sessionStorage.getItem("nombre de usuario"));

    navbar.innerHTML = `
    <div class="dropdown d-flex justify-content-center ms-4">
        <button class="btn dropdown-estilos dropdown-toggle" type="button"
            id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            ${usuarioStorage}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a href="#" class="dropdown-item" data-bs-toggle="modal" 
            data-bs-target="#exampleModal">Mi Carrito</a></li>
            <li><a class="dropdown-item" href="#">Mis cupones</a></li>
            <li><a class="dropdown-item" href="#" id="logout">Cerrar Sesión</a></li>
        </ul>
        <div class="modal fade" id="exampleModal" tabindex="-1" 
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="footer-titulo" id="exampleModalLabel">Carrito de compras
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="modalcontainer"></div>
                    <div class="modal-footer">
                        <p class="pe-3 precio-total" id="precioTotal">Precio total: 0$</p>
                        <button type="button" class="boton-newsl"
                            data-bs-dismiss="modal">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`

    const logout = document.getElementById("logout");

    logout.addEventListener("click",() =>{
        sessionStorage.setItem("sesion","false");
        location.reload();
    })

} else if (sessionStorage.getItem("sesion") == "false"){
    const navbar = document.getElementById("usuarioregistrado");

    navbar.innerHTML = `
    <div id="usuarioregistrado" class="d-flex justify-content-center">
        <a href="./pages/login.html" class="texto-link">Cuenta<img src="images/user.png" alt="Usuario icono"
        class="icons-nav"></a>
        <a href="#" class="texto-link" data-bs-toggle="modal"
        data-bs-target="#exampleModal">Carrito<img src="images/bag.png"
        alt="Carrito icono" class="icons-nav"></a>
        <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1"
          aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                <div class="modal-content">
                <div class="modal-header">
                <h5 class="footer-titulo" id="exampleModalLabel">Carrito de compras</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>                               
                </div>
                <div class="modal-body" id="modalcontainer"></div>                                       
                <div class="modal-footer">
                    <p class="pe-3 precio-total" id="precioTotal">Precio total: 0$</p>
                     <button type="button" class="boton-newsl"
                    data-bs-dismiss="modal">Comprar</button>
                    </div>                               
                </div>
                </div>
                </div>                                
    </div>`                                       
}
