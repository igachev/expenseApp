import { addToLocalStorage,calculateIncomeBalanceExpense,prepareItems } from "./localStorage.js";
import { alertMessages } from "./messages.js";
import { deleteItem } from "./deleteBtn.js";



const textInfo = document.getElementById('text-info');
const moneyInfo = document.getElementById('money-info');

const addItemBtn = document.querySelector('.add-btn');
let textList = document.querySelector('.text-list');


let id = '';
let deleteBtns;

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
    let dataId = document.createAttribute('data-id');
    dataId.value = id;
    item.setAttributeNode(dataId);

    addToLocalStorage(id,itemName,itemValue);
    
    //after item is added input fields will become empty
document.getElementById('text-info').value = '';
document.getElementById('money-info').value = '';

    // display message after the executed action
    alertMessages('Item added',2000);
    
    deleteBtns = document.querySelectorAll('.fas.fa-window-close');
    deleteBtns.forEach((btn) => {
        
        btn.addEventListener('click',deleteItem);
    })
}


    



