/*
Archivo Js de 
Guardar un pensamiento
*/

let listaTweets = document.getElementById("lista-tweets");

//Event listeners

eventListeners()

function eventListeners() {
    //Cuando se envia el formulario
    document.querySelector("#formulario").addEventListener("submit", agregarTweet);
}




//Funciones

//Añadir tweet del formulario
function agregarTweet(e) {
    e.preventDefault();
    //leer el valor del textarea
    let tweet = document.getElementById("tweet").value;

    //Crear elemento y añadirle el contenido de la lista

    let li = document.createElement("li");
    //Le damos al li el valor de la textarea
    li.innerText = tweet;


    //Creamos boton para eliminar

    let botonBorrar = document.createElement("a");
    botonBorrar.classList = "borrar-tweet";
    botonBorrar.innerText = "X";
    //Agregamos el boton borrar al tweet
    li.appendChild(botonBorrar);

    //Agregamos el tweet a la pantalla
    listaTweets.appendChild(li);
}