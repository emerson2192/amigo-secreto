let listaAmigo = [];

function adicionarAmigo() {
    // Pegando ao ID 'amigo' para colatar o valor digita
    let nome = document.getElementById('amigo').value;

    if (nome === '') {
        // Caso não pussua nem um valor adicionado
        alert('Nenhum nome foi inserido');
    } else {
        // Adicionando o me do amigo na lista
        listaAmigo.push(nome);
        // Chamada da função chamar amigo na tela
        mostrarAmigoNaTela(nome);
        // Limpando u local para que outro nome possa ser digitado
        document.getElementById('amigo').value = '';
    }
}
// Mostra amigo na tela durante a digitação, antes do botão sortear amigo
function mostrarAmigoNaTela(nome) {
    // Pega o elemento do ID lista amigos 
    let lista = document.getElementById('listaAmigos');
    //Cria um novo elemento na lista
    let item = document.createElement('li');
    //Adiciona o nome no novo item criado 
    item.textContent = nome;
    //Adiciona o novo item na lista
    lista.appendChild(item);
}

function sortearAmigo() {
    //A linha que sorteia o número e o arredonda 
    let pegarIndice = Math.floor(Math.random() * listaAmigo.length);
    //O indece sortedo é usado na lista para pegar o nome e colocar no  'amio escolhido'
    let amigoEscolhido = listaAmigo[pegarIndice];
    //Chamada função
    mostrarAmigo(amigoEscolhido);
}
// Mostra todos o elementos na tela e o amigo sorteado, depois que o boão sortear amigo é clicado 
function mostrarAmigo(nomeSorteado) {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa o conteúdo anterior

    // Exibe toda a lista de amigos usando for
    for (let i = 0; i < listaAmigo.length; i++) {
        // Criando o elemento li do HTML
        let item = document.createElement('li');
        //Pegando elemendo da lista e acrescentando no item
        item.textContent = listaAmigo[i];
        //Coloando e novo item na lista  no HTML
        resultado.appendChild(item);
    }

    // Adiciona o nome sorteado no final
    let itemSorteado = document.createElement('li');
    // Uma apresentação do nome o sorteado diferenciada do padrão original 
    itemSorteado.textContent = `🎉 Amigo sorteado: ${nomeSorteado}`;
    // Uma estilização na fonte usada no texto 
    itemSorteado.style.fontWeight = 'bold';
    // Adicionado o nome domigo sorteado na lista 
    resultado.appendChild(itemSorteado);
}
