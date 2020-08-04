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

    /*
    Agregar a local Storage
    */
    agregarTweetLocalStorage(tweet);
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

//Funcion para agregar a local storage
function agregarTweetLocalStorage(tweet) {
    let tweets;
    tweets = obtenerTweetsLocalStorage();
    //Añadir el nuevo tweet al arreglo
    tweets.push(tweet);
    //Convertir de string a arreglo
    localStorage.setItem("tweets", JSON.stringify(tweets));
}

//
function obtenerTweetsLocalStorage() {
    let tweets;
    //Revisamos los valores de localStorage
    if (localStorage.getItem("tweets") === null) {
        /*Si se detecta que no hay tweets en el localStorage entra 
        al if*/
        tweets = [];
        /* Si entra al if se inicializa los tweets como un arreglo 
        vacio 
        */
    } else {
        /* Si si hay tweets guardados en el localStorage, entrara 
        al else, y guarda en tweets los elementos que toma del 
        localStorage
        */
        tweets = JSON.parse(localStorage.getItem("tweets"));
    }
    return tweets;
}