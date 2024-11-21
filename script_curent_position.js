function extractHashPart(url) {
    //print(url.indexOf('#'));
    console.log(window.location.href);
    const hashIndex = window.location.href.indexOf('#');
    console.log(hashIndex);

    if (hashIndex !== -1) {
        return url.substring(hashIndex);
    }
    return '';
}
document.addEventListener("DOMContentLoaded", function() {
    const currentLocation = window.location.href;
    const hashPart = extractHashPart(currentLocation);
    console.log(currentLocation);
    console.log(hashPart);

    const menuItems = document.querySelectorAll(".nav-link");
    console.log(menuItems);

    menuItems.forEach(item => {
        if (item.getAttribute("href") === hashPart) {
            item.classList.add("active");
        }
        else {
            item.classList.remove('active'); 
        }
        console.log(item.classList);
    });
});