let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

exibirTarefas();


function salvarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}


function adicionarTarefa() {
    const inputDescricao = document.getElementById('descricao');
    const descricao = inputDescricao.value.trim();

    if (descricao !== "") {
        const novaTarefa = {
            descricao: descricao,
            status: false
        };

        tarefas.push(novaTarefa);
        salvarTarefas();
        exibirTarefas();

        inputDescricao.value = "";
    }
}


function alternarStatus(indice) {
    tarefas[indice].status = !tarefas[indice].status;
    salvarTarefas();
    exibirTarefas();
}


function excluirTarefa(indice) {
    tarefas.splice(indice, 1);
    salvarTarefas();
    exibirTarefas();
}


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

        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.onclick = () => excluirTarefa(index);

        divTarefa.appendChild(checkbox);
        divTarefa.appendChild(spanDescricao);
        divTarefa.appendChild(botaoExcluir);

        divLista.appendChild(divTarefa);
    });
}
