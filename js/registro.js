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

/* ARRAY VACIO PARA GUARDAR LOS USUARIOS NUEVOS */

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
        swal({
            title: "¡Oops!",
            text: `Parece que has ingresado un dato incorrecto :( 
                Por favor vuelve a intentarlo nuevamente.`,
            icon: "../images/reg-fail.png",
        });
    } else if (edadValidacion < 18) {
        swal({
            title: "¡Oops!",
            text: `Parece que has ingresado un dato incorrecto :( 
                Por favor vuelve a intentarlo nuevamente.`,
            icon: "../images/reg-fail.png",
        });
    } else if ((!inputEmail.value.includes("@")) || (!inputEmail.value.includes("."))) {
        swal({
            title: "¡Oops!",
            text: `Parece que has ingresado un dato incorrecto :( 
                Por favor vuelve a intentarlo nuevamente.`,
            icon: "../images/reg-fail.png",
        });
    } else if (!inputPassword.value.match(/[0-9]/g)) {
        swal({
            title: "¡Oops!",
            text: `Parece que has ingresado un dato incorrecto :( 
                Por favor vuelve a intentarlo nuevamente.`,
            icon: "../images/reg-fail.png",
        });
    } else {

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const edad = document.getElementById('edad').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const usuarioNuevo = new Usuario(nombre, apellido, edad, email, password);

        let usuarios = JSON.parse(localStorage.getItem("usuarios"));

        if (!usuarios) {
            usuariosRegistrados.push(usuarioNuevo);
            localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));
            sessionStorage.setItem("nombre de usuario", JSON.stringify(usuarioNuevo.nombre));
        } else {
            usuarios.push(usuarioNuevo);
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            sessionStorage.setItem("nombre de usuario", JSON.stringify(usuarioNuevo.nombre));
        }

        swal({
            title: "¡Bienvenido!",
            text: `Te has registrado correctamente 
            A continuacion recibiras un correo electronico para verificar tu cuenta.`,
            icon: "../images/registro-exito.png",
        }).then(res => {
            if(res){
                window.location.href = '../pages/login.html';
            }
        });
    }
});


/* VALIDACIONES EVENTO BLUR */

/* VALIDACION INPUT NOMBRE */

inputNombre.addEventListener("blur", () => {
    let mensaje = document.getElementById("mensaje");
    
    inputNombre.value.length > 0 ? mensaje.innerHTML = `<p class="valido m-0">✓</p>` : mensaje.innerHTML = `<p class="error m-0">No puedes dejar este campo vacío.</p>`;
});

/* VALIDACION INPUT APELLIDO */
    
inputApellido.addEventListener("blur", () => {
    let mensaje = document.getElementById("mensaje-2");

    inputApellido.value.length > 0 ? mensaje.innerHTML = `<p class="valido m-0">✓</p>` : mensaje.innerHTML = `<p class="error m-0">No puedes dejar este campo vacío.</p>`;
});

/* VALIDACION INPUT EDAD */

inputEdad.addEventListener("blur", () => {
    let edad = calcularEdad(inputEdad.value);
    let mensaje = document.getElementById("mensaje-3");

    edad >= 18 ? mensaje.innerHTML = `<p class="valido m-0">✓</p>` : mensaje.innerHTML = `<p class="error m-0">Debes ser mayor de edad para registrarte.</p>`;
});

/* VALIDACION INPUT EMAIL */

inputEmail.addEventListener("blur", () => {
    let mensaje = document.getElementById("mensaje-4");

    inputEmail.value.length > 0 && inputEmail.value.includes("@") && inputEmail.value.includes(".") ? mensaje.innerHTML = `<p class="valido m-0">✓</p>` : mensaje.innerHTML = `
    <p class="error m-0">Tu email no es valido.</p>`;
});

/* VALIDACION INPUT PASSWORD */

inputPassword.addEventListener("blur", () => {
    let mensaje = document.getElementById("mensaje-5");
    
    inputPassword.value.length > 0 && inputPassword.value.match(/[0-9]/g) ? mensaje.innerHTML = `<p class="valido m-0">✓</p>` : mensaje.innerHTML = `<p class="error m-0">Dato incorrecto, intenta otra vez.</p>`;
});