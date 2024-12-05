document.addEventListener('DOMContentLoaded', () => {

    const preloader = document.getElementById('preloader');
    const commentsContainer = document.getElementById('commentsContainer');
    const loadCommentsButton = document.getElementById('loadCommentsButton');

    async function fetchComments() {
        try {
            let response;
            const randomNum = Math.random();

            if (randomNum < 0.5){
                response = await fetch('https://jsonplaceholder.typicode.com/comments?_start=100');
            } else{
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
        commentsContainer.innerHTML = '';
        for (const comment of comments) {
            const commentElem = document.createElement('div');
            commentElem.classList.add('comment');
    
            const nameElem = document.createElement('h4');
            const textElem = document.createElement('p');
    
            nameElem.textContent = `${comment.name} (${comment.email})`;
            textElem.textContent = comment.body;
    
            commentElem.append(nameElem, textElem);
            commentsContainer.append(commentElem);
          }
    }

    loadCommentsButton.addEventListener('click', () => {
        preloader.style.display = 'block';
        fetchComments();
    });
});