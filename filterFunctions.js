import { getLocalStorage } from "./localStorage.js";
import { alertMessages } from "./messages.js";

export function filterByPrice() {
    location.reload()
    let items = getLocalStorage();
 
    if(items.length > 0) {
     items.sort((a,b) => {
        return a.valueItem - b.valueItem
     })
    }
    //console.log(items);
    localStorage.setItem('history',JSON.stringify(items));

   // alertMessages('Items filtered in ascending order by price',2000,'blue')
    
}

export function filterByName() {
    location.reload()
    let items = getLocalStorage();
    if(items.length > 0) {
        items.sort((a,b) => {
            let nameA = a.textItem.toLowerCase();
            let nameB = b.textItem.toLowerCase();
            if(nameA < nameB) { //sort string ascending order
                return -1;
            }

            else if(nameA > nameB) {
                return 1;
            }

            else {
                return 0; // no sorting
            }
        })
    }
    
    localStorage.setItem('history',JSON.stringify(items));
   // alertMessages('Items filtered in alphabetic order',2000,'blue')
    
}
//objs.sort((a,b) => a.last_nom - b.last_nom);

export function filterByInsertionOrder() {
    location.reload()
    let items = getLocalStorage();
    if(items.length > 0) {
        items.sort((a,b) => {
            return Number(a.id) - Number(b.id);
        })
    }

    localStorage.setItem('history',JSON.stringify(items));

   // alertMessages('Items filtered in insertion order',2000,'blue')
   
}