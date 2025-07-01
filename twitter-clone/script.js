const feed = [];
const feedContainer = document.getElementById('feed');
const postButton = document.getElementById('post-button');
const postText = document.getElementById('post-text');


async function getCatImage() {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    return data[0].url;
  } catch (error) {
    console.error('Erro ao buscar imagem de gatinho:', error);
    return 'https://via.placeholder.com/300?text=Gatinho+indisponível';
  }
}


function renderFeed() {
  feedContainer.innerHTML = '';

  feed.slice().reverse().forEach((post, index) => {
    const postElement = document.createElement('div');
    postElement.className = 'post';

    postElement.innerHTML = `
      <div class="post-header">
        <img src="${post.avatar}" alt="Avatar" class="avatar">
        <strong>${post.username}</strong>
      </div>
      <div class="post-text">${post.text}</div>
      <img src="${post.catImage}" alt="Imagem de Gatinho" class="cat-image">
      <div>
        <button class="like-button" onclick="likePost(${index})">❤️ Curtir (${post.likes})</button>
      </div>
    `;

    feedContainer.appendChild(postElement);
  });
}


async function createPost() {
  const text = postText.value.trim();

  if (text === '') {
    alert('Digite alguma coisa antes de postar!');
    return;
  }

  const catImage = await getCatImage();

  const newPost = {
    date: new Date(),
    username: 'meu_usuario',  
    avatar: 'https://i.pravatar.cc/150?img=3',  
    text: text,
    catImage: catImage,
    likes: 0
  };

  feed.push(newPost);
  postText.value = '';
  renderFeed();
}


function likePost(index) {
  const realIndex = feed.length - 1 - index;
  feed[realIndex].likes += 1;
  renderFeed();
}


postButton.addEventListener('click', createPost);
