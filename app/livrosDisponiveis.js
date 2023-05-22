const btnDisponiveis = document.getElementById("btnLivrosDisponiveis");
let statusDisponivel = 0
let livrosDisponiveis
btnDisponiveis.addEventListener("click", verificarDisponiveis);

function verificarDisponiveis() {
     order = 0;
     btnOrdenarPreco.style.backgroundColor = "";
    if (statusDisponivel === 0) {
        btnDisponiveis.style.backgroundColor = "#fc6621";
        livrosDisponiveis = [...livrosFiltrados].filter(livro => livro.quantidade > 0)
        exibirOsLivrosNaTela(livrosDisponiveis)
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosDisponiveis);
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
        statusDisponivel  = 1
    } else {
        elementoComValorTotalDeLivrosDisponiveis.innerHTML = "";
        btnDisponiveis.style.backgroundColor = "";
        exibirOsLivrosNaTela(livrosFiltrados)
        statusDisponivel = 0
        
    }
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `;
}
