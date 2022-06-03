import {getLocalStorage } from "./localStorage.js";
import {alertMessages } from "./messages.js"

//select text and value fields
let textInfo = document.getElementById('text-info');
let moneyInfo = document.getElementById('money-info');
let saveCurrentItem;

export function editItem(e) {
    e.preventDefault();
    console.log(e.currentTarget.parentElement);
    let currentItem = e.currentTarget.parentElement;
    saveCurrentItem = currentItem;
    //text and value of clicked items
    let currentText = currentItem.children[0].textContent;
    let currentValue = currentItem.children[1].textContent;

    
    //put the text and value of clicked item in the input fields
     textInfo.value = currentText;
     moneyInfo.value = currentValue;
    
     let editItemBtn = document.querySelector('.edit-btn');
     
     //when button is clicked update the text and value
     editItemBtn.addEventListener('click',editCompleted);
    
}

function editCompleted() {
    //get the new values
    let newText = textInfo.value;
    let newValue = moneyInfo.value;
    //update the item in the table
    saveCurrentItem.children[0].textContent = newText;
    saveCurrentItem.children[1].textContent = newValue;
}