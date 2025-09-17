//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let lista = document.getElementById("listaAmigos");
let i = 0;
let j;
let amigo;
lista.innerHTML = "";

function adicionarAmigo() {
    lista.innerHTML = "";
    amigo = document.getElementById("amigo").value;
    amigos[i] = amigo;
    i++;

    for(j = 0; j < i; j++){
        item = amigos[j];
        lista.innerHTML = lista.innerHTML+"<li>"+item+"</li>";
    }
}