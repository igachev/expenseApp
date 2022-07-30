import { getLocalStorage,balanceIncomeExpense } from "./localStorage.js";
import { alertMessages } from "./messages.js";

export function deleteAll(e) {
    e.preventDefault();
    let items = getLocalStorage();
    if(items.length > 0) {
        localStorage.clear();
        balanceIncomeExpense()
        alertMessages('Items deleted',2000,'blue');
        setTimeout(() => {
            location.reload();
        },3000)
    }
}