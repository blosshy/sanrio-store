/* FUNCION QUE GUARDA EN LOCALSTORAGE */

function guardarLocalJs(clave, valor) {
    localStorage.setItem(clave, valor);
}

/* FUNCION QUE CALCULA LA EDAD */

function calcularEdad(fecha_nacimiento) {
    let hoy = new Date();
    let cumpleanos = new Date(fecha_nacimiento);
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    let m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad;
}

/* CLASE CREADORA DE OBJETO USUARIO */

class Usuario {
    constructor(nombre, apellido, edad, email, password) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.password = password;
    }
}

/* ARRAY VACIO PARA GUARDAR LO QUE SE PUSHEE */

let usuariosRegistrados = [];

/*GET DE LOS INPUTS PARA VALIDACIONES*/

const inputNombre = document.getElementById('nombre');
const inputApellido = document.getElementById('apellido');
const inputEdad = document.getElementById('edad');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');

/* EVENTO REGISTRO */

const registro = document.getElementById("registro");

registro.addEventListener("submit", (e) => {

    e.preventDefault();

    /*VALIDACIONES DE EVENTO SUBMIT */

    let edadValidacion = calcularEdad(inputEdad.value);

    if ((inputNombre.value.length == 0) || (inputApellido.value.length == 0) || (inputEdad.value.length == 0) || (inputEmail.value.length == 0) || (inputPassword.value.length == 0)) {
        registro.remove()

        let contenedor = document.getElementById("form-container");

        let registroExitoso = document.createElement("div");

        registroExitoso.innerHTML = `
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 d-flex flex-column align-items-center">
                <h2 class="msj-exitoso m-5">¡Oops! Parece que has ingresado un dato incorrecto :(</h2>
                <img src="../images/reg-fail.png" alt="Melody dudando" class="img-fluid reg-exitoso-img">
                <a href="registro.html" class="registro-exitoso-link mt-3">→ Para volver a intentarlo click aquí ←</a>
            </div>
        </div>
    </div>
    `
        contenedor.appendChild(registroExitoso);
    } else if (edadValidacion < 18) {
        registro.remove()

        let contenedor = document.getElementById("form-container");

        let registroExitoso = document.createElement("div");

        registroExitoso.innerHTML = `
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 d-flex flex-column align-items-center">
                <h2 class="msj-exitoso m-5">¡Oops! Parece que has ingresado un dato incorrecto :(</h2>
                <img src="../images/reg-fail.png" alt="Melody dudando" class="img-fluid reg-exitoso-img">
                <a href="registro.html" class="registro-exitoso-link mt-3">→ Para volver a intentarlo click aquí ←</a>
            </div>
        </div>
    </div>
    `
        contenedor.appendChild(registroExitoso);
    } else if ((!inputEmail.value.includes("@")) || (!inputEmail.value.includes("."))) {
        registro.remove()

        let contenedor = document.getElementById("form-container");

        let registroExitoso = document.createElement("div");

        registroExitoso.innerHTML = `
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 d-flex flex-column align-items-center">
                <h2 class="msj-exitoso m-5">¡Oops! Parece que has ingresado un dato incorrecto :(</h2>
                <img src="../images/reg-fail.png" alt="Melody dudando" class="img-fluid reg-exitoso-img">
                <a href="registro.html" class="registro-exitoso-link mt-3">→ Para volver a intentarlo click aquí ←</a>
            </div>
        </div>
    </div>
    `
        contenedor.appendChild(registroExitoso);
    }else if (!inputPassword.value.match(/[0-9]/g)) {
        registro.remove()

        let contenedor = document.getElementById("form-container");

        let registroExitoso = document.createElement("div");

        registroExitoso.innerHTML = `
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 d-flex flex-column align-items-center">
                <h2 class="msj-exitoso m-5">¡Oops! Parece que has ingresado un dato incorrecto :(</h2>
                <img src="../images/reg-fail.png" alt="Melody dudando" class="img-fluid reg-exitoso-img">
                <a href="registro.html" class="registro-exitoso-link mt-3">→ Para volver a intentarlo click aquí ←</a>
            </div>
        </div>
    </div>
    `
        contenedor.appendChild(registroExitoso);
    }else{

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const usuarioNuevo = new Usuario(nombre, apellido, edad, email, password);

    usuariosRegistrados.push(usuarioNuevo);

    constJs = JSON.stringify(usuariosRegistrados);

    for (const usuario of usuariosRegistrados) {
        guardarLocalJs("usuario", constJs);
        guardarLocalJs("usuario", constJs);
    }

    registro.remove()

    let contenedor = document.getElementById("form-container");

    let registroExitoso = document.createElement("div");

    registroExitoso.innerHTML = `
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 d-flex flex-column align-items-center">
                <h2 class="msj-exitoso m-5">¡Te has registrado exitosamente!</h2>
                <img src="../images/registro-exito.png" alt="Cinnamonroll saludando" class="img-fluid reg-exitoso-img">
                <a href="login.html" class="registro-exitoso-link mt-3">→ Para iniciar sesión has click aquí ←</a>
            </div>
        </div>
    </div>
    `
    contenedor.appendChild(registroExitoso);

     /* let loginInfo = JSON.parse(localStorage.getItem("usuario")); */
    }
});


/* VALIDACIONES EVENTO BLUR */

/* VALIDACION INPUT NOMBRE */

inputNombre.addEventListener("blur", () => {

    if (inputNombre.value.length > 0) {
        let mensaje = document.getElementById("mensaje");
        mensaje.innerHTML = `
            <p class="valido m-0">✓</p>
        `
    } else {
        let mensaje = document.getElementById("mensaje");
        mensaje.innerHTML = `
            <p class="error m-0">No puedes dejar este campo vacío.</p>
        `
    }
});

/* VALIDACION INPUT APELLIDO */

inputApellido.addEventListener("blur", () => {

    if (inputApellido.value.length > 0) {
        let mensaje = document.getElementById("mensaje-2");
        mensaje.innerHTML = `
            <p class="valido m-0">✓</p>
        `
    } else {
        let mensaje = document.getElementById("mensaje-2");
        mensaje.innerHTML = `
            <p class="error m-0">No puedes dejar este campo vacío.</p>
        `
    }
});

/* VALIDACION INPUT EDAD */

inputEdad.addEventListener("blur", () => {
    let edad = calcularEdad(inputEdad.value);
    if (edad >= 18) {
        let mensaje = document.getElementById("mensaje-3");
        mensaje.innerHTML = `
            <p class="valido m-0">✓</p>
        `
    } else {
        let mensaje = document.getElementById("mensaje-3");
        mensaje.innerHTML = `
            <p class="error m-0">Debes ser mayor de edad para registrarte.</p>
        `
    }
});

/* VALIDACION INPUT EMAIL */

inputEmail.addEventListener("blur", () => {

    if ((inputEmail.value.length > 0) && (inputEmail.value.includes("@")) && (inputEmail.value.includes("."))) {
        let mensaje = document.getElementById("mensaje-4");
        mensaje.innerHTML = `
            <p class="valido m-0">✓</p>
        `
    } else {
        let mensaje = document.getElementById("mensaje-4");
        mensaje.innerHTML = `
            <p class="error m-0">Tu email no es valido.</p>
        `
    }
});

/* VALIDACION INPUT PASSWORD */

inputPassword.addEventListener("blur", () => {

    if ((inputPassword.value.length > 0) && (inputPassword.value.match(/[0-9]/g))) {
        let mensaje = document.getElementById("mensaje-5");
        mensaje.innerHTML = `
            <p class="valido m-0">✓</p>
        `
    } else {
        let mensaje = document.getElementById("mensaje-5");
        mensaje.innerHTML = `
            <p class="error m-0">Dato incorrecto, intenta otra vez.</p>
        `
    }
});