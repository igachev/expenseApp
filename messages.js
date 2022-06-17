//all status messages
const alertMessage = document.querySelector('.alert-messages');

export function alertMessages(text,seconds,colorChoice) {
alertMessage.innerText = `${text}`;

//select text color for the alert messages
switch(colorChoice) {
    case 'red':
        alertMessage.style.color = 'red';
    break;

    case 'blue':
        alertMessage.style.color = 'blue';
    break;

    case 'yellow':
    alertMessage.style.color = 'yellow';
    break;

    case 'brown':
    alertMessage.style.color = `${'#88540B'}`;
    break;
}

setTimeout(() => {  
alertMessage.innerText = `input your incomes and expenses and calculate your balance`;

if(text === 'Item Deleted' || text === 'Item was edited' ||
text === 'Items deleted' ||
text === 'Items filtered in ascending order by price' ||
text === 'Items filtered in alphabetic order' ||
text === 'Items filtered in insertion order') {
    //refresh page in order to update values of balance,income,expense
    location.reload();
}
},seconds);

}

//inform us what to do when edit icon is clicked
export function editInfo(text) {
alertMessage.innerText = text;
}