// Array para armazenar os livros
let estoque = [];

// Função para adicionar livro ao estoque
function adicionarLivro(titulo, autor, quantidade) {
    // Verifica se o livro já existe
    const livroExistente = estoque.find(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());
    if (livroExistente) {
        console.log("Livro já existe no estoque.");
        return;
    }

    // Adiciona novo livro
    estoque.push({ titulo, autor, quantidade });
    console.log("Livro adicionado com sucesso!");
}

// Função para remover um livro pelo título
function removerLivro(titulo) {
    const index = estoque.findIndex(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());
    if (index !== -1) {
        estoque.splice(index, 1);
        console.log("Livro removido com sucesso!");
    } else {
        console.log("Livro não encontrado no estoque.");
    }
}

// Função para atualizar a quantidade de um livro
function atualizarQuantidade(titulo, novaQuantidade) {
    const livro = estoque.find(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());
    if (livro) {
        livro.quantidade = novaQuantidade;
        console.log("Quantidade atualizada com sucesso!");
    } else {
        console.log("Livro não encontrado no estoque.");
    }
}

// Função para listar todos os livros
function listarLivros() {
    if (estoque.length === 0) {
        console.log("O estoque está vazio.");
        return;
    }

    console.log("Livros no estoque:");
    estoque.forEach(livro => {
        console.log(`Título: ${livro.titulo} | Autor: ${livro.autor} | Quantidade: ${livro.quantidade}`);
    });
}

// Exemplos de uso:
adicionarLivro("Dom Quixote", "Miguel de Cervantes", 10);
adicionarLivro("1984", "George Orwell", 5);
listarLivros();

atualizarQuantidade("1984", 8);
removerLivro("Dom Quixote");
listarLivros();
