/* VARIABLE QUE CONTIENE EL USUARIO TRAIDO DE STORAGE */

let usuarioStorage = JSON.parse(localStorage.getItem("usuarios"));

/*LOGIN QUE REDIRECCIONA AL INICIO DE LA TIENDA */

const login = document.getElementById("login");

login.addEventListener("submit", (e) => {
    e.preventDefault();

    const logEmail = document.getElementById("email-login").value;
    const logPassword = document.getElementById("password-login").value;
    
    if (usuarioStorage === null) {
        let mensaje = document.getElementById("error-p");
            mensaje.innerHTML = `
            <p class="error m-0">Debes estar registrado para iniciar sesión.</p>
            `
    }else{
        usuarioStorage.forEach(usuario => {
        if ((usuarioStorage.some((elemento)=> elemento.email === logEmail)) && (usuarioStorage.some((elemento)=> elemento.password === logPassword))){
            swal({
                title: "¡Bienvenido a Sanrio Store Argentina!",
                text: `Has iniciado sesión correctamente. 
                Gracias por confiar en nosotros, ¡Felices compras!.`,
                icon: "../images/inicio-exitoso.png",
            }).then(res => {
                if(res){
                    window.location.href = '../index.html';
                    sessionStorage.setItem("sesion", "true");
                }
            });
        }else if ((usuarioStorage.some((elemento)=> elemento.email !== logEmail)) && (usuarioStorage.some((elemento)=> elemento.password === logPassword))){
            let mensaje = document.getElementById("error-p");
            mensaje.innerHTML = `
            <p class="error m-0">El email y/o contraseña ingresado es incorrecto.</p>
            `
            sessionStorage.setItem("sesion", "false");
        }else if ((usuarioStorage.some((elemento)=> elemento.email === logEmail)) && (usuarioStorage.some((elemento)=> elemento.password !== logPassword))){
            let mensaje = document.getElementById("error-p");
            mensaje.innerHTML = `
            <p class="error m-0">El email y/o contraseña ingresado es incorrecto.</p>
            `
            sessionStorage.setItem("sesion", "false");
        }else if ((usuarioStorage.some((elemento)=> elemento.email !== logEmail)) && (usuarioStorage.some((elemento)=> elemento.password !== logPassword))){
            let mensaje = document.getElementById("error-p");
            mensaje.innerHTML = `
            <p class="error m-0">El email y/o contraseña ingresado es incorrecto.</p>
            `
            sessionStorage.setItem("sesion", "false");
        }
    });
    }
})

/* GET DE LOS INPUTS DEL LOGIN */

const logEmail = document.getElementById("email-login");
const logPassword = document.getElementById("password-login");

/* VALIDACION BLUR INPUT EMAIL */

logEmail.addEventListener("blur", () => {
    let mensaje = document.getElementById("error-m");

    logEmail.value.length > 0 && logEmail.value.includes("@") && logEmail.value.includes(".") ? mensaje.innerHTML = `<p class="valido m-0">✓</p>` : mensaje.innerHTML = `
    <p class="error m-0">El dato ingresado es incorrecto.</p>`; 
});

/* VALIDACION BLUR INPUT PASSWORD */

logPassword.addEventListener("blur", () => {
    let mensaje = document.getElementById("error-p");

    logPassword.value.length > 0 && logPassword.value.match(/[0-9]/g) ? mensaje.innerHTML = `<p class="valido m-0">✓</p>` : mensaje.innerHTML = `<p class="error m-0">Dato incorrecto, intenta otra vez.</p>`;
});