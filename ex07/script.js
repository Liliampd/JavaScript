const listaCurtidas = [];

function adicionarCurtida() {
    const input = document.getElementById('nomeInput');
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome.");
        return;
    }

    if (!listaCurtidas.includes(nome)) {
        listaCurtidas.push(nome);
        atualizarMensagem();
    } else {
        alert("Essa pessoa já curtiu!");
    }

    input.value = "";
}

function atualizarMensagem() {
    const mensagem = document.getElementById('mensagem');
    const total = listaCurtidas.length;

    if (total === 0) {
        mensagem.textContent = "Ninguém curtiu";
    } else if (total === 1) {
        mensagem.textContent = `${listaCurtidas[0]} curtiu`;
    } else if (total === 2) {
        mensagem.textContent = `${listaCurtidas[0]} e ${listaCurtidas[1]} curtiram`;
    } else {
        mensagem.textContent = `${listaCurtidas[0]}, ${listaCurtidas[1]} e mais ${total - 2} pessoas curtiram`;
    }
}
