import {balanceIncomeExpense, getLocalStorage, prepareItems } from "./localStorage.js";
import {alertMessages } from "./messages.js"

export function deleteItem(e) {
    e.preventDefault();

    //display clicked item
    let currentItem = e.currentTarget.parentElement;
    
    //select the data-id of the clicked item
    let currentId = currentItem.getAttribute('data-id');
    //remove the clicked item from the list
    let textList = document.querySelector('.text-list');
    textList.removeChild(currentItem);

    //remove it from the local storage
    removeFromLocalStorage(currentId);

   balanceIncomeExpense()
   
    
    //display message on field status
    alertMessages('Item Deleted',3000,'red');
}

 function removeFromLocalStorage(currentItemId) {
    let items = getLocalStorage();
    
    items = items.filter((item) => {
        //return all items which are different from our currentItemId
        if(item.id != currentItemId) {
            return item;
        }

        
    })
    //update the local storage
    localStorage.setItem('history',JSON.stringify(items))
  
}

function updatePageAfterDelete() {
    let b = 0;
    let ex = 0;
  
    let items = getLocalStorage()
    items.forEach((item) => {
        
        b += Number(item.valueItem);
        if(item.valueItem < 0) {
            ex += Number(item.valueItem)
        }
    })
    document.querySelector('.balance').innerHTML = `<h4>Balance:${b}</h4>`;
    document.querySelector('.expenses').innerHTML = `<h4>Expense:${ex}</h4>`;
}


