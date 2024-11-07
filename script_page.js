document.addEventListener('DOMContentLoaded', function() {
    // Находим все кнопки с классом 'tips-button'
    const tipsButtons = document.querySelectorAll('.tips-button');

    tipsButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Находим родительский элемент .dish
            // Находим соответствующий блок советов
            const tips = this.nextElementSibling; // Соседний элемент после кнопки (секция советов)

            // Переключаем классы для плавного появления/исчезновения
            if (tips.classList.contains('show')) {
                tips.classList.remove('show'); // Убираем класс show
                setTimeout(() => { 
                    tips.style.display = 'none'; // Скрываем элемент после анимации
                }, 10); // Время должно совпадать с временем перехода в CSS
                this.textContent = 'Показать советы'; // Меняем текст кнопки
            } else {
                tips.style.display = 'block'; // Сначала показываем элемент
                setTimeout(() => { 
                    tips.classList.add('show'); // Добавляем класс show для анимации
                }, 5); // Небольшая задержка для запуска анимации
                this.textContent = 'Скрыть советы'; // Меняем текст кнопки
            }
        });
    });
});