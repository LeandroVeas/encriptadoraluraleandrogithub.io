let btnEncriptar = document.getElementById("encriptar");
let btnDesencriptar = document.getElementById("desencriptar")
let botonCopiar = document.getElementById("botonCopiar");
let btnBorrar = document.getElementById("borrar");






function encriptarMensaje() {
    let frase = document.getElementById('textoingresado').value;
   
    
    frase = frase.toLowerCase();
    

    let textoEncriptado = frase;
    textoEncriptado = textoEncriptado.replaceAll("e", "enter");
    textoEncriptado = textoEncriptado.replaceAll("i", "imes");
    textoEncriptado = textoEncriptado.replaceAll("o", "ober");
    textoEncriptado = textoEncriptado.replaceAll("u", "ufat");
    textoEncriptado = textoEncriptado.replaceAll("a", "ai");

    document.getElementById('mensajeObtenido').innerHTML = textoEncriptado;
    cambioImagen()

    
}


function desencriptarMensaje() {
    let frase = document.getElementById('textoingresado').value;
    frase = frase.toLowerCase();
    
    let textoDesencriptado = frase;
    textoDesencriptado = textoDesencriptado.replaceAll("enter", "e");
    textoDesencriptado = textoDesencriptado.replaceAll("imes", "i");
    textoDesencriptado = textoDesencriptado.replaceAll("ai", "a");
    textoDesencriptado = textoDesencriptado.replaceAll("ober", "o");
    textoDesencriptado = textoDesencriptado.replaceAll("ufat", "u");
    //alert(textoDesencriptado);

    document.getElementById('mensajeObtenido').innerHTML = textoDesencriptado;
    cambioImagen2()

}


function copiar() {

    var contenido = document.querySelector("#textoResultado");
    contenido.select();

    document.execCommand("Copy");
}
function cambioImagen(){
    let imagen = document.getElementById("figuraprincipal");
    imagen.src = "/img/panteraSinFondo.png"
    
    }

function cambioImagen2(){
        let imagen = document.getElementById("figuraprincipal");
        imagen.src = "/img/inspectorsin fondo.png"
        imagen.style.width="50%"
        imagen.style.height="50%"

        
        }

btnEncriptar.addEventListener("click", encriptarMensaje);
btnDesencriptar.addEventListener("click", desencriptarMensaje);

botonCopiar.addEventListener("click", function () {
    let textoCopiado = document.getElementById("mensajeObtenido")
    textoCopiado.select();
    document.execCommand("copy")
    botonCopiar.innerText = "Copiado"
    }) 

btnBorrar.addEventListener("click",borrar);
function borrar(){
    window.location.reload()
}        
       
         

   
     

    
    