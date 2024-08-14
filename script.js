/* Seleccion de Elementos */
const btnEncriptar = document.querySelector(".btn_encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto_aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta_contenedor");
const btnCopiar = document.querySelector(".btn_copiar");
const btnDesencriptar = document.querySelector(".btn_desencriptar");


/* Boton de Encriptar */
btnEncriptar.addEventListener("click", e =>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " ); /* Expresion regular que cambia los signos */
    
    if(texto == ""){
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacío";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúscula";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto; /* Inner html es una propiedad q nos permite imprimir y leer nuestro msj dentro de txtevaluar */
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }

}); /* addEventListener  Nos previene de que el boton se ejecute por defecto al hacer un click en el .
    e = evento --------- Normalize es un metodo para normalizar una cadena de caracteres utilizando descomposicion canonica*/




/* Boton de Desencriptar */
btnDesencriptar.addEventListener("click", e =>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " ); 
    
    if(texto == ""){
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacío";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúscula";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto; 
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }

});

/* Boton de Copiar */
btnCopiar.addEventListener("click", e =>{
    e.preventDefault();
    let copiar = respuesta; /* Este es el valor que obtenemos como respuesta en el textarea evaluar (linea 5 ) */
    copiar.select(); /* Nos permite seleccionar todo el texto de nuestro textarea evaluar*/
    document.execCommand("copy"); /* Declaramos el metodo execommand copiar la seleccion del textarea evaluar */
});
















