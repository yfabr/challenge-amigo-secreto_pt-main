//armazenar nomes
let listaAmigos = [];

//agrega amigos
function adicionarAmigo(){
    let amigo = document.querySelector('input').value;
    listaAmigos.push(amigo);
    console.log(listaAmigos);
    let ul = document.querySelector('ul');
    ul.innerHTML='';

        listaAmigos.forEach(function atualizarLista (amigos){
            
            let li = document.createElement('li')
            li.innerHTML = amigos
            ul.appendChild(li)
           // console.log(amigos)

})
}

// Sorteia o amigo na lista
function sortearAmigo(){

    let indiceAleatorio = Math.floor(Math.random()*listaAmigos.length)

// console.log(indiceAleatorio);

    let amigoSorteado = listaAmigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `O amigo sorteado foi ${amigoSorteado}!`
    

// Verifica se a lista está vazia
    if (listaAmigos.length === 0){
        document.getElementById('resultado').innerHTML = 'Sua lista de amigos está vazia, preencha seus amigos para sortear!'
        };
}




