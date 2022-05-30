const balance = document.querySelector('.balance');
const income = document.querySelector('.income');
const expenses = document.querySelector('.expenses');

const textInfo = document.getElementById('text-info');
const moneyInfo = document.getElementById('money-info');

const addItemBtn = document.querySelector('.add-btn');
const textList = document.querySelector('.text-list');

let sumIncome = 0;
let sumBalance = 0;
let sumExpenses = 0;
let id = '';

addItemBtn.addEventListener('click',itemAdded);

//when page is loaded display items from local storage
window.addEventListener('DOMContentLoaded',prepareItems);

function itemAdded(e) {
    e.preventDefault()
    let itemName = textInfo.value;
    let itemValue = moneyInfo.value;

    if(itemValue > 0) {
        sumIncome += Number(itemValue);
        sumBalance += Number(itemValue);
        income.innerHTML = `<h4>Income:${sumIncome}</h4>`;
        balance.innerHTML = `<h4>Balance:${sumBalance}</h4>`;
    }

    else if(itemValue < 0) {
        sumExpenses += Number(itemValue);
        sumBalance += Number(itemValue);
        expenses.innerHTML = `<h4>Expenses:${sumExpenses}</h4>`;
        balance.innerHTML = `<h4>Balance:${sumBalance}</h4>`;
    }

    let item = document.createElement('article');
    item.classList.add('item')
    item.innerHTML = `
    <p>${itemName}</p>
    <p>${itemValue}</p>
    <i class="fas fa-edit"></i>
    <i class="fas fa-window-close"></i>
    `;
    textList.append(item);

    id = new Date().getTime().toString();

    addToLocalStorage(id,itemName,itemValue);
    

    //after item is added input fields will be empty
document.getElementById('text-info').value = '';
document.getElementById('money-info').value = '';


}



function getLocalStorage() {
    return localStorage.getItem('history')
    ? JSON.parse(localStorage.getItem('history')) : [];
}

function addToLocalStorage(id,textItem,valueItem) {
let listItem = {id:id,textItem:textItem,valueItem:valueItem};
let items = getLocalStorage();
items.push(listItem);
localStorage.setItem('history',JSON.stringify(items));
}

function displayItemsStoredInLocalStorage(id,textItem,valueItem) {
    let storedArticle = document.createElement('article');
    storedArticle.classList.add('item');

    let dataId = document.createAttribute('data-id');
    dataId.value = id;
    storedArticle.setAttributeNode(dataId);

    calculateIncomeBalanceExpense(valueItem);

    storedArticle.innerHTML = `
    <p>${textItem}</p>
    <p>${valueItem}</p>
    <i class="fas fa-edit"></i>
    <i class="fas fa-window-close"></i>
    `;
    textList.append(storedArticle);
}

function calculateIncomeBalanceExpense(valueItem) {
    //display balance
    sumBalance += Number(valueItem);
    balance.innerHTML = `<h4>Balance:${sumBalance}</h4>`;

    //display income
    if(valueItem > 0) {
        sumIncome += Number(valueItem);
        income.innerHTML = `<h4>Income:${sumIncome}</h4>`;
    }

    //display expense
    else {
        sumExpenses += Number(valueItem);
        expenses.innerHTML = `<h4>Expenses:${sumExpenses}</h4>`;
    }

}

function prepareItems() {
    let items = getLocalStorage();
    if(items.length > 0) {
        items.forEach((item) => {
            displayItemsStoredInLocalStorage(item.id,item.textItem,item.valueItem);
        })
    }
}

