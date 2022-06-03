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
    //update the item in the table only
    saveCurrentItem.children[0].textContent = newText;
    saveCurrentItem.children[1].textContent = newValue;
    let itemId = saveCurrentItem.getAttribute('data-id');
    let items = getLocalStorage();

    //update item in the local storage
    items = items.map((item) => {
    //compare id from local storage with id of clicked item.
    //If they are the same this is the item which will be edited.
    //Edit text and value of this item
        if(item.id == itemId) {
            item.textItem = newText;
            item.valueItem = newValue;
            return item;
        }
        else {
            return item;
        }
        
    })
    //update the local storage
    localStorage.setItem('history',JSON.stringify(items))
}