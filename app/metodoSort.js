const btnOrdenarPreco = document.getElementById("btnOrdenarPorPreco");
let order = 0;
statusDisponivel;
btnOrdenarPreco.addEventListener("click", ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
  let livrosParaOrdenar;
  if (statusDisponivel === 1) {
    livrosParaOrdenar = livrosDisponiveis;
    const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosParaOrdenar);
    exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
  } else {
    livrosParaOrdenar = livrosFiltrados;
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = "";
  }

  if (order === 0) {
    const livrosOrdenados = [...livrosParaOrdenar].sort(
      (a, b) => a.preco - b.preco
    );
    exibirOsLivrosNaTela(livrosOrdenados);
    order = 1;
    this.style.backgroundColor = "#fc6621";
    this.innerHTML = "ORDENAR POR PREÇO ↑"
  } else {
    const livrosOrdenados = [...livrosParaOrdenar].sort(
      (a, b) => b.preco - a.preco
    );

    exibirOsLivrosNaTela(livrosOrdenados);
    order = 0;
    this.style.backgroundColor = "#e42020";
    this.innerHTML = "ORDENAR POR PREÇO ↓";
  }
}
