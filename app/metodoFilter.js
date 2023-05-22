const buttonsFiltro = document.querySelectorAll(
  "#btnFiltrarLivrosBack, #btnFiltrarLivrosDados, #btnFiltrarLivrosFront"
);

let filtro;
buttonsFiltro.forEach((button) => {
  button.addEventListener("click", filtrarLivros);
});

function filtrarLivros() {
  order = 0;
  btnOrdenarPreco.style.backgroundColor = "";
  btnOrdenarPreco.innerHTML = 'ORDENAR POR PREÇO'
  statusDisponivel = 0;
  btnDisponiveis.style.backgroundColor = "";
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = "";
  

  breakme: if (this.value) {
    if (this.value == filtro) {
      buttonsFiltro.forEach((btn) => (btn.style.backgroundColor = ""));
      filtro = "";
      getBuscarLivrosDaAPI();
      break breakme;
    }
    filtro = this.value;
    buttonsFiltro.forEach((btn) => (btn.style.backgroundColor = ""));
    this.style.backgroundColor = "#fc6621";
  }
  if (filtro) {
    livrosFiltrados = livrosComDesconto.filter(
      (livro) => livro.categoria == filtro
    );
    exibirOsLivrosNaTela(livrosFiltrados);
  } else {
    livrosFiltrados = livrosComDesconto;
    exibirOsLivrosNaTela(livrosFiltrados);
  }
}
