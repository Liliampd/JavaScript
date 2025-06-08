/*Crie um sistema simples para gerenciar o estoque de uma livraria. O sistema deve permitir adicionar livros ao estoque, remover livros, atualizar a quantidade de livros e listar todos os livros disponíveis.

Passos:
1 - Defina um array de objetos para armazenar os livros no estoque.
   * Cada livro deve ser representado por um objeto com propriedades titulo, autor e quantidade.*/

const estoque = [
    {id:2035, titulo: 'O outro lado da meia noite', autor: 'Sidney Sheldon', quantidade: 12},
    {id:3547, titulo: 'Conte me seus sonhos', autor: 'Sidney Sheldon', quantidade: 15},
    {id:4426, titulo: 'O caçador de Pipas', autor: 'Khaled hosseini', quantidade: 20},
    {id:9139, titulo: 'O dilema do porco espinho', autor: 'Leandro Karnal', quantidade: 22},
    
];

/*2 - Crie funções para gerenciar o estoque:
  * adicionarLivro(titulo, autor, quantidade) - Adiciona um novo livro ao estoque.*/

const adicionaLivro = (id,titulo,autor,quantidade) => {
    estoque.push({
        id,
        titulo,
        autor,
        quantidade
    })
}

adicionaLivro(3335, 'A empregada','Frieda McFadden', 16);

  /* removerLivro(titulo) - Remove um livro do estoque pelo ID.*/

  const removeLivro = (idDoLivro) => {
    const existeIdNoEstoque = !!estoque.find(livro => livro.id === idDoLivro)
    console.log('Existe', existeIdNoEstoque)
    if(existeIdNoEstoque){
        for(let indice = 0; indice < estoque.length; indice++){
            if(estoque[indice].id === idDoLivro){
                console.log(`O livro de id ${idDoLivro} foi removido`);
                estoque.splice(indice,1);
                break;
                }
            }
        }
        else
        console.log(`O livro de id ${idDoLivro} não foi encontrado`)
  }

removeLivro(2035);


  /* atualizarQuantidade(titulo, novaQuantidade) - Atualiza a quantidade de um livro no estoque.*/

  const atualizaQuantidade = (idDoLivro, novaQuantidade) => {
        const existeIdNoEstoque = !!estoque.find(livro => livro.id === idDoLivro)
        if(existeIdNoEstoque){
            for(let livro of estoque) {
                if(livro.id === idDoLivro){
                    livro.quantidade = novaQuantidade;
                    console.log(`A quantidade do livro ${livro.titulo} foi atualizada para ${novaQuantidade}.`)
                break;
            }
        }

    } else{
        console.log(`O id ${idDoLivro} Não foi localizado no estoque`);
    }    
}

atualizaQuantidade(3335, 55);


 /* listarLivros() - Lista todos os livros no estoque.*/

const listarLivros = () => {
    if(estoque.length === 0){
        console.log('O estoque esta vazio')
    } else{
        console.log(`O estoque possui ${estoque.length} títulos.`)
        for(let livro of estoque){
            console.log(`
            ID: ${livro.id}
            Livro: ${livro.titulo}
            Autor: ${livro.autor}
            Quantidade: ${livro.quantidade}
                `)
        }
    }

}

listarLivros();

const executaEMostraLista = (acao, mostraLista) => {
    console.log('Vou executar');
    acao();
    console.log("Executei");
    mostraLista();
}

executaEMostraLista(() => adicionaLivro(3335, 'A empregada','Frieda McFadden', 16), listarLivros)

/*3 - Use condicionais para verificar se um livro já existe antes de adicioná-lo ou removê-lo.*/
/*4 - Use laços de repetição para iterar sobre o array de livros quando necessário. */

