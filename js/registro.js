function guardarLocalJs(clave, valor) {
    localStorage.setItem(clave, valor);
}


/* GUARDAR INFO DE LOS INPUTS EN UN ARRAY */

class Usuario {
    constructor(nombre, apellido, edad, email, password) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.password = password;
    }
}

let usuariosRegistrados = [];

const registro = document.getElementById("registro");

registro.addEventListener("submit", (e) => {

    e.preventDefault();

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
});

/*GET DE LOS INPUTS PARA VALIDACIONES*/

const inputNombre = document.getElementById('nombre');
const inputApellido = document.getElementById('apellido');
const inputEdad = document.getElementById('edad');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');

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