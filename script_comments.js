document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const commentsContainer = document.getElementById('commentsContainer');
    const loadCommentsButton = document.getElementById('loadCommentsButton');
    const commentTemplate = document.getElementById('commentTemplate');

    async function fetchComments() {
        try {
            let response;
            const randomNum = Math.random();

            if (randomNum < 0.5) {
                response = await fetch('https://jsonplaceholder.typicode.com/comments?_start=100');
            } else {
                response = await fetch('https://jsonplaceholder.typicode.com/comments?_end=200');
            }

            if (!response.ok) {
                throw new Error(`Ошибка сети: ${response.status}`);
            }

            const comments = await response.json();
            renderComments(comments);
        } catch (error) {
            commentsContainer.innerHTML = `<p>⚠️ Что-то пошло не так: ${error.message}</p>`;
        } finally {
            preloader.style.display = 'none';
        }
    }

    function renderComments(comments) {
        commentsContainer.innerHTML = '';
        for (const comment of comments) {
            const commentElem = commentTemplate.content.cloneNode(true);
            
            // Заполнение шаблона данными комментария
            commentElem.querySelector('h4').textContent = `${comment.name} (${comment.email})`;
            commentElem.querySelector('p').textContent = comment.body;

            commentsContainer.append(commentElem);
        }
    }

    loadCommentsButton.addEventListener('click', () => {
        preloader.style.display = 'block';
        fetchComments();
    });
});
