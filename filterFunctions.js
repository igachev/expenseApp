import { getLocalStorage } from "./localStorage.js";
import { alertMessages } from "./messages.js";

export function filterByPrice() {
    let items = getLocalStorage();
 
    if(items.length > 0) {
     items.sort((a,b) => {
        return a.valueItem - b.valueItem
     })
    }
    console.log(items);
    localStorage.setItem('history',JSON.stringify(items));

    alertMessages('Items filtered in ascending order by price',1200,'blue')
}

//objs.sort((a,b) => a.last_nom - b.last_nom);