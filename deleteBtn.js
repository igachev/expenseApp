import {getLocalStorage } from "./localStorage.js";
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
    
    //display message on field status
    alertMessages('Item Deleted',1000)
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


