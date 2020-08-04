/*
Archivo Js de 
Guardar un pensamiento
*/

let listaTweets = document.getElementById("lista-tweets");

//Event listeners

eventListeners()

function eventListeners() {
    //Cuando se envia el formulario, para agregar el pensamiento
    document.querySelector("#formulario").addEventListener("submit", agregarTweet);

    //Cuando se clickea la X, para borrar el pensamiento
    listaTweets.addEventListener("click", borrarTweet);
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

function borrarTweet(e) {
    e.preventDefault();
    if (e.target.className == "borrar-tweet") {
        //Diste click en eliminar
        e.target.parentElement.remove();
        //La linea anterior elimina el li de el pensamiento

        //alert("Pensamiento eliminado");
        /*Mostramos un mensaje para que el usuario sepa que ya fue 
        eliminado el pensamiento*/
    }
}