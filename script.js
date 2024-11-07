(function() {
    let startTime = performance.now();

    window.addEventListener('load', function() {
        let endTime = performance.now();
        let loadTime = endTime - startTime;
        document.getElementById('contacts').innerHTML += `<p>Время загрузки страницы: ${loadTime.toFixed(2)} мс</p>`;
    });
})();