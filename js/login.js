/* CUENTA CREADA */
const cuenta = [{
    email: 'emailfalso@gmail.com',
    password: '12345',
    nombre:`matias`
}];

/* FALSO LOGIN QUE REDIRECCIONA AL INICIO DE LA TIENDA */

const login = document.getElementById("login");

login.addEventListener("submit",(e)=>{

    e.preventDefault();

    const logEmail = document.getElementById("email-login").value;
    const logPassword = document.getElementById("password-login").value;

    if ((logEmail === cuenta[0].email) && (logPassword === cuenta[0].password)) {
        window.location.href='../index.html';
        /* let nombreUsuario = getElementById("nombre-usuario");
        nombreUsuario.innerHTML = `
            ${cuenta[0].nombre};
        `  */
    }
});

const logEmail = document.getElementById("email-login");
const logPassword = document.getElementById("password-login");

/* VALIDACION INPUT EMAIL */

logEmail.addEventListener("blur",()=>{

    if ((logEmail.value.length > 0) && (logEmail.value.includes("@")) && (logEmail.value.includes("."))){
        let mensaje = document.getElementById("error-m");
        mensaje.innerHTML = `
            <p class="valido m-0">✓</p>
        `
    }else{
        let mensaje = document.getElementById("error-m");
        mensaje.innerHTML = `
            <p class="error m-0">Tu email no es valido.</p>
        `
    }
});

/* VALIDACION INPUT PASSWORD */

logPassword.addEventListener("blur",()=>{

    if ((logPassword.value.length > 0) && (logPassword.value.match(/[0-9]/g))){
        let mensaje = document.getElementById("error-p");
        mensaje.innerHTML = `
            <p class="valido m-0">✓</p>
        `
    }else{
        let mensaje = document.getElementById("error-p");
        mensaje.innerHTML = `
            <p class="error m-0">Dato incorrecto, intenta otra vez.</p>
        `
    }
});
