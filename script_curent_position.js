function extractHashPart(url) {
    const hashIndex = url.indexOf('#');
    console.log(hashIndex);

    if (hashIndex !== -1) {
        return url.substring(hashIndex);
    }
    return '';
}

document.addEventListener("DOMContentLoaded", function() {
    // Получаем текущий URL
    const currentLocation = document.location.pathname;
    const hashPart = extractHashPart(currentLocation);
    
    // Получаем все ссылки в меню
    const menuItems = document.querySelectorAll("#menu a");

    menuItems.forEach(item => {
        // Проверяем, соответствует ли href текущему URL
        if (item.getAttribute("href") === hashPart) {
            item.classList.add("active"); // Добавляем класс active к соответствующему пункту
        }
    });
    console.log(hashPart);
});