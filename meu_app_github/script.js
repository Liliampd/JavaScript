document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value.trim();
    const userList = document.getElementById('userList');
    const message = document.getElementById('message');

    // Limpa resultados anteriores
    userList.innerHTML = '';
    message.textContent = '';

    if (query === '') {
        message.textContent = 'Digite um nome para buscar.';
        return;
    }

    fetch(`https://api.github.com/search/users?q=${query}`)
        .then(response => response.json())
        .then(data => {
            if (data.total_count > 0) {
                data.items.forEach(user => {
                    const li = document.createElement('li');
                    li.innerHTML = `
                        <img src="${user.avatar_url}" alt="Avatar" width="30" height="30" style="border-radius:50%; margin-right:8px;">
                        <a href="${user.html_url}" target="_blank">${user.login}</a>
                    `;
                    userList.appendChild(li);
                });
            } else {
                message.textContent = 'Não foram encontrados usuários para esta pesquisa.';
            }
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
            message.textContent = 'Erro ao buscar usuários. Tente novamente mais tarde.';
        });
});
