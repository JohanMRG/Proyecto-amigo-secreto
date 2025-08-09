let amigos = [];

//Registro de nuevos nombres
function agregarAmigo(){
    let nombreIngresado = document.getElementById('amigo').value;

    //Verifica que el input no este vacio
    if (nombreIngresado === "") {
        return;
    }

    //Verificacion de ingreso correcto
    //La expresion "/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/.test" comprueba que el valor escrito sean solo letras y espacios intermedios.
    if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/.test(nombreIngresado)){
        amigos.push(nombreIngresado);
        console.log(nombreIngresado);
        console.log(amigos);
        crearLista()
        limpiarCelda();

    //Ingreso incorrecto
    } else {
        alert('Ingresa un nombre valido');
        limpiarCelda();
    } return;
}

agregarAmigo();

//Registro de los nombres en html
function crearLista(){
    let checador
    let listaHtml = document.getElementById("listaAmigos")
    listaHtml.innerHTML = '';
    for (checador = 0; checador < (amigos.length); checador++) {
        let elemento = amigos[checador]
        let li = document.createElement("li")
        li.textContent = elemento
        listaHtml.appendChild(li);
}
}

//Limpiadores
function limpiarCelda(){
    document.getElementById('amigo').value = '';
}

function limpiarHtml(){
    let listaHtml = document.getElementById("listaAmigos")
    listaHtml.innerHTML = '';
}

//Sistema de seleccion del nombre
function eleccionAmigo(){
    //Generacion del numero aleatorio
    let posicion = Math.floor(Math.random() * amigos.length);
    console.log(posicion);
    let elegido = amigos[posicion];
    console.log(elegido);

    //Creacion html
    let eleccion = document.getElementById("resultado");
    eleccion.innerHTML = '';
    let li2 = document.createElement("li");
    li2.textContent = elegido;
    eleccion.appendChild(li2);
}

//Sistema de sorteo
function sortearAmigo(){
    eleccionAmigo();
    amigos = [];
    limpiarHtml();
}




