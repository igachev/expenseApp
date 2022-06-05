import { getLocalStorage } from "./localStorage.js";
import { alertMessages } from "./messages.js";

export function deleteAll(e) {
    e.preventDefault();
    let items = getLocalStorage();
    if(items.length > 0) {
        localStorage.clear();
        alertMessages('Items deleted',1000,'blue');
    }
}