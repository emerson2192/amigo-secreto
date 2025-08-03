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

        // Idicionando o novo elemento na lista
        lista.appendChild(item);

}
