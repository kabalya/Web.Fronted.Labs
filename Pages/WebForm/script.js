function addRow() {
    const dishName = document.getElementById('dishName').value;
    const protein = parseFloat(document.getElementById('protein').value);
    const carbs = parseFloat(document.getElementById('carbs').value);
    const fats = parseFloat(document.getElementById('fats').value);

    const minValue = 0;
    const maxValue = 9999999;
    if (dishName.trim()==='')
        {
            alert('Пользователь дурак и нужно что-то ввести');
            return;
        }

    if (isNaN(protein) || protein < minValue || protein > maxValue) {
        alert(`Значение белков должно быть числом от ${minValue} до ${maxValue}.`);
        return;
    }

    if (isNaN(carbs) || carbs < minValue || carbs > maxValue) {
        alert(`Значение углеводов должно быть числом от ${minValue} до ${maxValue}.`);
        return;
    }

    if (isNaN(fats) || fats < minValue || fats > maxValue) {
        alert(` пользователь дурак и нужно чтото ввести не меньше${minValue} до ${maxValue}.`);
        return;
    }

    const calories = (protein * 2) + (carbs * 7) + (fats * 10);


    const template = document.getElementById('rowTemplate');
    const newRow = template.content.cloneNode(true);

    newRow.querySelector('.dish-name').textContent = dishName;
    newRow.querySelector('.protein').textContent = protein;
    newRow.querySelector('.carbs').textContent = carbs;
    newRow.querySelector('.fats').textContent = fats;
    newRow.querySelector('.calories').textContent = calories.toFixed(2);

    document.getElementById('tableBody').appendChild(newRow);
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