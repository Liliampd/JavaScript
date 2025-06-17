// Mudar o texto do título após 1 segundo
setTimeout(() => {
    const titulo = document.querySelector('h1');
    titulo.textContent = 'Novo texto do título';
    titulo.style.backgroundColor = 'green'; 
    titulo.style.color = 'white';
}, 1000); // 1000 milissegundos = 1 segundo

// Alterar o estilo dos itens da lista após 2 segundos
setTimeout(() => {
    const itensLista = document.querySelectorAll('ul li');
    itensLista.forEach(item => {
        item.style.color = 'blue';
        item.style.backgroundColor = 'lightgray';
        item.style.padding = '5px';
        item.style.margin = '3px';
    });
}, 2000);

// Adicionar uma classe aos parágrafos após 3 segundos
setTimeout(() => {
    const paragrafos = document.querySelectorAll('p');
    paragrafos.forEach(p => {
        p.classList.add('destaque');
    });
}, 3000);

// Alterar o texto do botão após 4 segundos
setTimeout(() => {
    const botao = document.querySelector('button');
    botao.textContent = 'Novo texto do botão';
}, 4000);
