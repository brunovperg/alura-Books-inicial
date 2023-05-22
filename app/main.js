let livros = [];
let livrosFiltrados
const endpointAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
  const res = await fetch(endpointAPI);
  livros = await res.json();
  let livrosComDesconto = aplicarDesconto(livros);
  livrosFiltrados = livrosComDesconto
  exibirOsLivrosNaTela(livrosFiltrados);
}
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById(
  "valor_total_livros_disponiveis"
);
elementoComValorTotalDeLivrosDisponiveis.innerHTML = ''