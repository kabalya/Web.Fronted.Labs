function extractHashPart(url) {
    const hashIndex = url.indexOf('#');
    console.log(hashIndex);

    if (hashIndex !== -1) {
        return url.substring(hashIndex);
    }
    return '';
}
document.addEventListener("DOMContentLoaded", function() {
    const currentLocation = document.location.pathname;
    const hashPart = extractHashPart(currentLocation);

    const menuItems = document.querySelectorAll("#menu a");

    menuItems.forEach(item => {

        if (item.getAttribute("href") === hashPart) {
            item.classList.add("active");
        }
    });
    console.log(hashPart);
});