let livros = []
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()

const elementoParaInserirLivros = document.getElementById('livros')
console.log(elementoParaInserirLivros)


async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointAPI)
    livros = await res.json()
    console.table(livros)
    exibirOsLivrosNaTela(livros)
}


function exibirOsLivrosNaTela(listaDelivros) {
    listaDelivros.forEach(livro => {
        elementoParaInserirLivros.innerHTML += `
    <div class="livro">
    <img class="livro__imagens" src="imagens/Cangaceiro-Javascript.png" alt="Capa do livro Cangaceiro JavaScript" />
    <h2 class="livro__titulo">
        Cangaceiro JavaScript:
        Uma aventura no sertão da programação
      </h2>
      <p class="livro__descricao">Flávio Almeida</p>
      <p class="livro__preco" id="preco">R$29,90</p>
      <div class="tags">
        <span class="tag">Front-end</span>
      </div>
    </div>
    `;
    })
}