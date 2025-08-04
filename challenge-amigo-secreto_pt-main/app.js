// lista para adicionar os nomes dos amigos
let listaAmigo = [];


function adicionarAmigo() {
    //Pega o nome digitado
    let nome = document.getElementById('amigo').value;

    if (nome === '') {
        alert('Nenhum nome foi inserido');
    } else {
        // Adiciona o nome na lista interna
        listaAmigo.push(nome);

    }
 //chamar a função 
 mostroAmigoNaTela(nome);

// Limpa o input
document.getElementById('amigo').value = '';
        
}

function mostroAmigoNaTela(nome){
     // Pega o elemento lista do HTML
        let lista = document.getElementById('listaAmigos');

        // Criando um novo item na lista
        let item = document.createElement('li');

        //adicionando o nome no item
        item.textContent = nome;

        // Adicionando o novo item na lista
        lista.appendChild(item);

}
function sortearAmigo(){
    // Aqui o math.Floor arredonda o indice que o math.random sortiou
    let pegarIndice =  Math.floor(Math.random()*listaAmigo.length);
    //O indice sorteiado é usado para capiturar um nome
    let amigoEscolhido = listaAmigo[pegarIndice];
    //Chamada da função que ira exibir o nome sorteado 
    mostrarAmigo(amigoEscolhido);
}

function mostrarAmigo(texto) {
    let resultado = document.getElementById('resultado');

    // Limpa a lista antes de mostrar um novo nome
    resultado.innerHTML = '';

    // Cria o item com o nome sorteado
    let item = document.createElement('li');
    item.textContent = texto;

    // Adiciona na lista de resultados
    resultado.appendChild(item);
}


