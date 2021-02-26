function validarRespuestas(){
    let total= 4;
    let puntos= 0;

    let myform  = document.forms["cuestionario"];
    let respuestas = ["b","a","c","a"] ;
    for (let i = 1; i <= total; i++){
        if(myform["Pregunta" + i].value === respuestas[i - 1]){
            puntos++;
        }
    }
    let resultado = document.getElementById("Resultado");
    resultado.innerHTML = '<h2>Total: <span>' + puntos + '</span> puntos</h3>'

    return false;
}

function validacionCampos(){
    let formulario = document.campos;
    let mensaje = document.getElementById("validacion");
    let error = "";
    if(formulario.nombre.value == ""){
        error+="Falta nombre <br>"
    }
    if(formulario.apellido.value == ""){
        error+="Falta apellido <br>";
    }
    if(formulario.direccion.value == ""){
        error+="Falta direccion <br>";
    }
    if(formulario.telefono.value == ""){
        error+="Falta telefono <br>";
    }
    if(formulario.email.value == ""){
        error+="Falta Email <br>";
    }
    
    mensaje.innerHTML = error;
}

function validarNumero(){
    let numero = document.getElementById("numero1");
    if(numero.value == ""){
        alert("Digite numero:");
    }
    else{
        if(!isNaN(numero.value)){ 
            alert(numero.value.length);
        }else{
            alert("No es numero valido");
        } 
    }
}
function Redirect(){
    let formulario = document.redirect;
    let link;
    if(formulario.google.checked){
        link = "http://www.google.com";
    }
    if(formulario.bing.checked){
        link = "http://www.bing.com";
    }
    if(formulario.yahoo.checked){
        link = "http://www.yahoo.com";
    }
    if(formulario.ask.checked){
        link = "http://www.ask.com";
    }
    window.location.href = link ;
}