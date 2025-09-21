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
    if(!amigo){
        alert("Por favor, insira um nome");
        return;
    }
    amigos[i] = amigo;
    i++;
    document.getElementById("amigo").value = "";

    for(j = 0; j < i; j++){
        item = amigos[j];
        lista.innerHTML = lista.innerHTML+"<li>"+item+"</li>";
    }

    
}
//deixar em branco == alert


function sortearAmigo() {
    if (i < 1){
        lista.innerHTML = "Nenhum amigo selecionado";
        return;
    }
    let numeroSorteado = Math.floor(Math.random() * i);
    let amigoSorteado = amigos[numeroSorteado];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado foi ${amigoSorteado}!!!`;
}