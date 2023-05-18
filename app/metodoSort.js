let btnOrdenarPreco = document.getElementById("btnOrdenarPorPreco");

btnOrdenarPreco.addEventListener("click", ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    let livrosOrdenados = livrosFiltrados.sort((a, b) => a.preco - b.preco)
    console.log(livrosOrdenados)
    // exibirOsLivrosNaTela(livrosOrdenados)
}


