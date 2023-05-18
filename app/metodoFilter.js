const buttons = document.querySelectorAll(".btn");
let filtro;
buttons.forEach((button) => {;
  button.addEventListener("click", filtrarLivros);
});

function filtrarLivros() {
   
  breakme: if (this.value) {
      if (this.value == filtro) {
           buttons.forEach((btn) => (btn.style.backgroundColor = ""));
          getBuscarLivrosDaAPI();
          filtro = ''
        break breakme
    }
      filtro = this.value;
       buttons.forEach((btn) => (btn.style.backgroundColor = ""));
      this.style.backgroundColor = "#fc6621";
  }
  let livrosFiltrados = livrosComDesconto.filter(
    (livro) => livro.categoria == filtro
  );
    exibirOsLivrosNaTela(livrosFiltrados);
    console.log(livrosNaTela)
    return livrosFiltrados
}
