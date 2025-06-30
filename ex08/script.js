// Array para armazenar as tarefas
let tarefas = [];

// Função para adicionar nova tarefa
function adicionarTarefa() {
    const inputDescricao = document.getElementById('descricao');
    const descricao = inputDescricao.value.trim();

    if (descricao !== "") {
        // Criar um objeto tarefa
        const novaTarefa = {
            descricao: descricao,
            status: false // Começa como não concluída
        };

        // Adicionar ao array
        tarefas.push(novaTarefa);

        // Limpar o campo de texto
        inputDescricao.value = "";

        // Atualizar a exibição
        exibirTarefas();
    }
}

// Função para alternar o status da tarefa
function alternarStatus(indice) {
    tarefas[indice].status = !tarefas[indice].status;
    exibirTarefas();
}

// Função para renderizar a lista de tarefas
function exibirTarefas() {
    const divLista = document.getElementById('lista-tarefas');
    divLista.innerHTML = "";

    tarefas.forEach((tarefa, index) => {
        const divTarefa = document.createElement('div');
        divTarefa.className = 'tarefa';

        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.checked = tarefa.status;
        checkbox.onchange = () => alternarStatus(index);

        const spanDescricao = document.createElement('span');
        spanDescricao.textContent = tarefa.descricao;
        spanDescricao.className = tarefa.status ? 'concluida' : 'nao-concluida';

        divTarefa.appendChild(checkbox);
        divTarefa.appendChild(spanDescricao);

        divLista.appendChild(divTarefa);
    });
}
