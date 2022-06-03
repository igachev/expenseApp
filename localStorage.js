//here are all functions for the local storage 
import { deleteItem } from "./deleteBtn.js";
import {editItem} from "./editBtn.js";

let balance = document.querySelector('.balance');
let income = document.querySelector('.income');
let expenses = document.querySelector('.expenses');

const textList = document.querySelector('.text-list');

 let sumIncome = 0;
 let sumBalance = 0;
 let sumExpenses = 0;


export function getLocalStorage() {
    return localStorage.getItem('history')
    ? JSON.parse(localStorage.getItem('history')) : [];
}

export function addToLocalStorage(id,textItem,valueItem) {
let listItem = {id:id,textItem:textItem,valueItem:valueItem};

let items = getLocalStorage();
items.push(listItem);
localStorage.setItem('history',JSON.stringify(items));
}

export function displayItemsStoredInLocalStorage(id,textItem,valueItem) {
    let storedArticle = document.createElement('article');
    storedArticle.classList.add('item');

    //create data attribute
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

    //select all close buttons and give them the option to
    //delete the item from this row
    let deleteBtns = document.querySelectorAll('.fas.fa-window-close');
    deleteBtns.forEach((btn) => {
        btn.addEventListener('click',deleteItem);
    })


    //select all edit buttons and give them the option to
    //edit the item from this row
    let editBtns = document.querySelectorAll('.fa-edit');
    editBtns.forEach((btn) => {
        btn.addEventListener('click',editItem);
    })
}

export function calculateIncomeBalanceExpense(valueItem) {
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
        expenses.innerHTML = `<h4>Expense:${sumExpenses}<h4>`;
    }
    
}

export function prepareItems() {
    
    let items = getLocalStorage();
    if(items.length > 0) {
        items.forEach((item) => {
            displayItemsStoredInLocalStorage(item.id,item.textItem,item.valueItem);
        })
    }
}


