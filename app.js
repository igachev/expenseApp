import { getLocalStorage,addToLocalStorage,displayItemsStoredInLocalStorage,calculateIncomeBalanceExpense,prepareItems } from "./localStorage.js";
import { alertMessages } from "./messages.js";

const balance = document.querySelector('.balance');
const income = document.querySelector('.income');
const expenses = document.querySelector('.expenses');

const textInfo = document.getElementById('text-info');
const moneyInfo = document.getElementById('money-info');

const addItemBtn = document.querySelector('.add-btn');
const textList = document.querySelector('.text-list');


let id = '';

addItemBtn.addEventListener('click',itemAdded);

//when page is loaded display items from local storage
window.addEventListener('DOMContentLoaded',prepareItems);

function itemAdded(e) {
    e.preventDefault();
    let itemName = textInfo.value;
    let itemValue = moneyInfo.value;

    calculateIncomeBalanceExpense(itemValue);

    //adding the item to the list of items
    let item = document.createElement('article');
    item.classList.add('item')
    item.innerHTML = `
    <p>${itemName}</p>
    <p>${itemValue}</p>
    <i class="fas fa-edit"></i>
    <i class="fas fa-window-close"></i>
    `;
    textList.append(item);

    //create unique id for each added item
    id = new Date().getTime().toString();

    addToLocalStorage(id,itemName,itemValue);
    
    //after item is added input fields will be empty
document.getElementById('text-info').value = '';
document.getElementById('money-info').value = '';

    // display message after the executed action
    alertMessages('Item added',2000);
}




