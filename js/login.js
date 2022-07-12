/* VARIABLE QUE CONTIENE EL FORM TRAIDO POR ID */

let usuarioStorage = JSON.parse(localStorage.getItem("usuario"));

/*LOGIN QUE REDIRECCIONA AL INICIO DE LA TIENDA */

const login = document.getElementById("login");

login.addEventListener("submit", (e) => {
    e.preventDefault();

    const logEmail = document.getElementById("email-login").value;
    const logPassword = document.getElementById("password-login").value;

    if ((usuarioStorage.email === logEmail) && (usuarioStorage.password === logPassword)) {
        window.location.href = '../index.html';
        sessionStorage.setItem("sesion", "true");
    } else if ((usuarioStorage.email !== logEmail) && (usuarioStorage.password === logPassword)) {
        let mensaje = document.getElementById("error-p");
        mensaje.innerHTML = `
        <p class="error m-0">El email y/o contraseña ingresado es incorrecto.</p>
    `
        sessionStorage.setItem("sesion", "false");
    } else if ((usuarioStorage.email === logEmail) && (usuarioStorage.password !== logPassword)) {
        let mensaje = document.getElementById("error-p");
        mensaje.innerHTML = `
        <p class="error m-0">El email y/o contraseña ingresado es incorrecto.</p>
    `
    } else if ((usuarioStorage.email !== logEmail) && (usuarioStorage.password !== logPassword)) {
        let mensaje = document.getElementById("error-p");
        mensaje.innerHTML = `
        <p class="error m-0">El email y/o contraseña ingresado es incorrecto.</p>
    `
        sessionStorage.setItem("sesion", "false");
    }
})

/* GET DE LOS INPUTS DEL LOGIN */

const logEmail = document.getElementById("email-login");
const logPassword = document.getElementById("password-login");

/* VALIDACION INPUT EMAIL */

logEmail.addEventListener("blur", () => {

    if ((logEmail.value.length > 0) && (logEmail.value.includes("@")) && (logEmail.value.includes("."))) {
        let mensaje = document.getElementById("error-m");
        mensaje.innerHTML = `
            <p class="valido m-0">✓</p>
        `
    } else {
        let mensaje = document.getElementById("error-m");
        mensaje.innerHTML = `
            <p class="error m-0">No puedes dejar este campo vacío.</p>
        `
    }
});

/* VALIDACION INPUT PASSWORD */

logPassword.addEventListener("blur", () => {

    if ((logPassword.value.length > 0) && (logPassword.value.match(/[0-9]/g))) {
        let mensaje = document.getElementById("error-p");
        mensaje.innerHTML = `
            <p class="valido m-0">✓</p>
        `
    } else {
        let mensaje = document.getElementById("error-p");
        mensaje.innerHTML = `
            <p class="error m-0">Dato incorrecto, intenta otra vez.</p>
        `
    }
});