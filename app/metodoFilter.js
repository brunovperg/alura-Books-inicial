const buttonsFiltro = document.querySelectorAll(
  "#btnFiltrarLivrosBack, #btnFiltrarLivrosDados, #btnFiltrarLivrosFront"
);
console.log(buttonsFiltro);
let filtro;
let livrosFiltrados
buttonsFiltro.forEach((button) => {
  button.addEventListener("click", filtrarLivros);
});

function filtrarLivros() {
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
    let livrosFiltrados = livrosComDesconto.filter(
      (livro) => livro.categoria == filtro
    );
    exibirOsLivrosNaTela(livrosFiltrados);
    console.table(livrosFiltrados);
    
  } else {
    let livrosFiltrados = livrosComDesconto;
    exibirOsLivrosNaTela(livrosFiltrados);
    console.table(livrosFiltrados);
   
  }
  return livrosFiltrados
}
