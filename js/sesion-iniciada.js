if (sessionStorage.getItem("sesion") == "true") {
    const navbar = document.getElementById("usuarioregistrado");

    let usuarioStorage = JSON.parse(sessionStorage.getItem("nombre de usuario"));

    navbar.innerHTML = `
    <div class="dropdown d-flex justify-content-center ms-4">
        <button class="btn dropdown-estilos dropdown-toggle" type="button"
            id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            ${usuarioStorage}
        </button>
        <ul class="dropdown-menu z-index" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item z-index" href="#">Mi carrito</a></li>
            <li><a class="dropdown-item z-index" href="#">Mis cupones</a></li>
            <li><a class="dropdown-item z-index" href="#" id="logout">Cerrar Sesión</a></li>
        </ul>
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
        <a href="#" class="texto-link">Carrito<img src="images/bag.png" alt="Carrito icono"
        class="icons-nav"></a>
    </div>`
}
