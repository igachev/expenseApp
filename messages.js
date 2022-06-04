//all status messages
const alertMessage = document.querySelector('.alert-messages');

export function alertMessages(text,seconds) {
alertMessage.innerText = `${text}`;

setTimeout(() => {
alertMessage.innerText = `Status`;
if(text === 'Item Deleted' || text === 'Item was edited') {
    //refresh page in order to update values of balance,income,expense
    location.reload();
}
},seconds);

}