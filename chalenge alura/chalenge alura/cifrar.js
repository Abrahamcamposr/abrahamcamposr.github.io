var btnEncriptar = document.getElementById("btn-encriptar"); 
btnEncriptar.onclick = encriptacion;

var btnDesencriptar = document.getElementById("btn-desencriptar"); 
btnDesencriptar.onclick = desencriptacion;

var btnCopiar = document.getElementById("btn-Copiar");  
btnCopiar.onclick= copiartxt;

var btnClear = document.getElementById("btn-Clear"); 
btnClear.onclick = clearAll

const contenedorErrores = document.querySelector(".contenedor-errores");

//validacion de texto

function validarMensaje () {
    let erroresPrevios = contenedorErrores.querySelectorAll(".error");
    for (let err of erroresPrevios) {
        contenedorErrores.removeChild(err);
    }
    var mensaje= document.getElementById("input-texto").value; 
    let letrasValidas = "abcdefghijklmnñopqrstuvwxyz ";
    let mensajeError = document.createDocumentFragment();
    for (let letra of mensaje) {
        if (!letrasValidas.includes(letra)) {
            let p = document.createElement("p");
            p.setAttribute("class", "error");
            alert  ("Usted coloco un carácter no válido. ej: letra mayúscula, acento o !#~€¬¿?¡");
            mensajeError.appendChild(p);
        }
    }
    contenedorErrores.appendChild(mensajeError);
    if (contenedorErrores.children.length === 0) {
        return true;
    }
    return false;
}

// Funcion para encriptar texto
function encriptacion(){

    if (!validarMensaje()) return;
    var texto = document.getElementById("input-texto").value;
    var texto = texto.toLowerCase();
    var textoEncriptado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.getElementById("msg").value = textoEncriptado;
    }
   
 //Funcion para Desencriptar el texto
function desencriptacion (){ 
    var texto = document.getElementById("input-texto").value;
    var textoDesencriptado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.getElementById("msg").value = textoDesencriptado; 
   
}
//Funcion para boton copiar
function copiartxt() {
    var copyText = document.getElementById("msg");
    copyText.select();
    document.execCommand('copy');
    alert('El texto a sido copiado exitosamente');
}
//Funcion para Boton ClearAll
function clearAll(){
    document.getElementById("input-texto").value= "";
    document.getElementById("msg").value="";
}





