function addRow() {
    const dishName = document.getElementById('dishName').value;
    const protein = parseFloat(document.getElementById('protein').value);
    const carbs = parseFloat(document.getElementById('carbs').value);
    const fats = parseFloat(document.getElementById('fats').value);
    
    const calories = (protein * 2) + (carbs * 7) + (fats * 10);

    const dishData = {
        name: dishName,
        protein: protein,
        carbs: carbs,
        fats: fats,
        calories: calories.toFixed(2)
    };

    addToTable(dishData);
    saveToLocalStorage(dishData);
    document.getElementById('foodForm').reset();
}

function addToTable(dishData) {
    const tableBody = document.getElementById('nutritionTable').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();

    newRow.insertCell(0).innerText = dishData.name;
    newRow.insertCell(1).innerText = dishData.protein;
    newRow.insertCell(2).innerText = dishData.carbs;
    newRow.insertCell(3).innerText = dishData.fats;
    newRow.insertCell(4).innerText = dishData.calories; 
}

function saveToLocalStorage(dishData) {
    let dishes = JSON.parse(localStorage.getItem('dishes')) || [];
    
    dishes.push(dishData);
    localStorage.setItem('dishes', JSON.stringify(dishes));
}

function loadFromLocalStorage() {
    const dishes = JSON.parse(localStorage.getItem('dishes')) || [];
    
    dishes.forEach(dish => {
        addToTable(dish);
    });
}

function clearTable() {
    const tableBody = document.getElementById('nutritionTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    localStorage.removeItem('dishes');
}

document.addEventListener('DOMContentLoaded', loadFromLocalStorage);