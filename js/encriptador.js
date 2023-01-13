//funcion en donde se crea el boton despues del click en encriptar/desencriptar
function botonCopiar() {
    let buttomcopy = document.createElement("button");
    buttomcopy.textContent = "Copiar";
    buttomcopy.setAttribute("class", "CopiarBoton");
    buttomcopy.setAttribute("onclick", "copiarTexto()");
    let ingresarbuttom = document.getElementById("ingreseTexto");
    ingresarbuttom.appendChild(buttomcopy);
}
//se cambia el estilo donde se representa el valor encriptado o desencriptado
function cambioEstiloCajaEncriptado(result) {
    document.getElementById('logoMuñeco').style.display = "none";
    document.getElementById('ingreseTexto').textContent = "";
    document.getElementById('sinMensaje').innerHTML = result;
    document.getElementById('sinMensaje').style.margin = "0px auto";
    document.getElementById('sinMensaje').style.padding = "50px 10px";
    document.getElementById('sinMensaje').style.height = "60%";
}
//se encripta basado en el nombre del boton
function encriptadorTextArea(botonNombre) {
    let encriptadorText = document.getElementById('enciptadorText').value;
    if (botonNombre == "encriptador") {
        let result = encriptadorText.replace(/e/gi, "enter");
        result = result.replace(/i/gi, "imes");
        result = result.replace(/a/gi, "ai");
        result = result.replace(/o/gi, "ober");
        result = result.replace(/u/gi, "ufat");
        cambioEstiloCajaEncriptado(result);
        botonCopiar();
    } else {
        let result = encriptadorText.replace(/enter/gi, "e");
        result = result.replace(/imes/gi, "i");
        result = result.replace(/ai/gi, "a");
        result = result.replace(/ober/gi, "o");
        result = result.replace(/ufat/gi, "u");
        cambioEstiloCajaEncriptado(result);
        botonCopiar();
    }

}
//la funcionalidad del boton para copiar el texto
function copiarTexto() {
    let copiarText = document.getElementById('sinMensaje').innerHTML;
    navigator.clipboard.writeText(copiarText);
}

//funcion para validar que solo acepta letras
function validarEncriptado(event) {
    let botonNombre = document.getElementById(event.srcElement.id).name;
    let encriptadorText = document.getElementById('enciptadorText').value;
    let letters = /^[a-z\s]+$/;
    if (encriptadorText.match(letters)) {
        encriptadorTextArea(botonNombre);
    } else {
        alert("Ingrese texto solo con letras minúsculas y sin acentos");
    }
}
