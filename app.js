
let lista_amigos = [];
console.log("Archivo app.js cargado correctamente");
// Función para insertar un amigo en la lista
function insertarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validación
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Guardar en el array
    lista_amigos.push(nombre);

    // Limpiar 
    input.value = "";

    // Mostrar 
    mostrarLista();
}

// Función para mostrar la lista 
function mostrarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; 

    lista_amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

// Sortear un amigo
function sortearAmigo() {
    if (lista_amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * lista_amigos.length);
    let amigoSecreto = lista_amigos[indiceAleatorio];

    let ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = `<li>el amigo secreto es: ${amigoSecreto}</li>`;
}
