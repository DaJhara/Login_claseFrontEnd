const email = document.getElementById("email")
const pass = document.getElementById("password")
const loguin = document.getElementById("loguin")
const parrafo = document.getElementById("warnings")

loguin.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let regexPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}/
    parrafo.innerHTML = ""
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(!regexPassword.test(pass.value)){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = ""
        login()
    }
})


function login() {
    var user = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (user == "correo@prueba.com" && password == "Prueba.2023") {
        console.log(user)
        console.log(password)
        alert("Iniciaste Sesión")
        window.location = "/index.html";
    } else {
        alert("Datos incorrectos")
    }
}