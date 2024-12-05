document.addEventListener('DOMContentLoaded', () => {

    const preloader = document.getElementById('preloader');
    const commentsContainer = document.getElementById('commentsContainer');
    const loadCommentsButton = document.getElementById('loadCommentsButton');

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
            commentsContainer.innerHTML = `<p>⚠ Что-то пошло не так: ${error.message}</p>`;
        } finally {

            preloader.style.display = 'none';
        }
    }

    function renderComments(comments) {
        commentsContainer.innerHTML = comments.map(comment => `
            <div class="comment">
                <h4>${comment.name} (${comment.email})</h4>
                <p>${comment.body}</p>
            </div>
        `).join('');
    }

    // Обработчик события нажатия кнопки
    loadCommentsButton.addEventListener('click', () => {
        preloader.style.display = 'block';
        fetchComments();
    });
});