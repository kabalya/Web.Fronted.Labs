document.addEventListener('DOMContentLoaded', function() {
    const tipsButtons = document.querySelectorAll('.tips-button');

    tipsButtons.forEach(button => {
        button.addEventListener('click', function() {

            const tips = this.nextElementSibling;

            if (tips.classList.contains('show')) {
                tips.classList.remove('show');
                setTimeout(() => { 
                    tips.style.display = 'none';
                }, 10);
                this.textContent = 'Показать советы';
            } else {
                tips.style.display = 'block';
                setTimeout(() => { 
                    tips.classList.add('show');
                }, 5);
                this.textContent = 'Скрыть советы';
            }
        });
    });
});