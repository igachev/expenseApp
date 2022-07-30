import { addToLocalStorage,balanceIncomeExpense, prepareItems,centerItems, getLocalStorage} from "./localStorage.js";
import { alertMessages } from "./messages.js";
import { deleteItem } from "./deleteBtn.js";
import { editItem } from "./editBtn.js";
import {deleteAll} from "./deleteAll.js"

const textInfo = document.getElementById('text-info');
const moneyInfo = document.getElementById('money-info');

const addItemBtn = document.querySelector('.add-btn');
const deleteAllBtn = document.querySelector('.delete-all-btn');
let textList = document.querySelector('.text-list');


let id = '';
let deleteBtns;
let allItems;
let addedItems = [];

addItemBtn.addEventListener('click',itemAdded);

//when page is loaded display items from local storage
window.addEventListener('DOMContentLoaded',prepareItems);

function itemAdded(e) {
    e.preventDefault();

    
/////////
    let itemName = textInfo.value;
    let itemValue = moneyInfo.value;

    //calculateIncomeBalanceExpense(itemValue);

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

    //update values of balance,income,expense
    balanceIncomeExpense()
    
    //after item is added input fields will become empty
document.getElementById('text-info').value = '';
document.getElementById('money-info').value = '';

    // display message when the item is added
    alertMessages('Item added',3000,'yellow');
    
    deleteBtns = document.querySelectorAll('.fas.fa-window-close');
    deleteBtns.forEach((btn) => {
        btn.addEventListener('click',deleteItem);
    })

    //select all edit buttons and give them the option to
    //edit the item from this row
    let editBtns = document.querySelectorAll('.fa-edit');
    editBtns.forEach((btn) => {
        btn.addEventListener('click',editItem);
       
    })

    //delete all items
    deleteAllBtn.addEventListener('click',deleteAll);

     //if item list contains less than 3 items change the height of
    // its container to 100px in order to be able to scroll
    allItems = document.querySelectorAll('.item')
    if(allItems.length < 3 && allItems.length > 0) {
        textList.style.height = `${100}px`
    }
    else {
        textList.style.height = `${200}px`
    }

    //when scrolling inside the item list all items move to their
    // central position.
    //If item is even number its coming from left side.
    //If item is odd number its coming from right side.
    
        textList.addEventListener('scroll',centerItems)
    

}





    



