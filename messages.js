//all status messages
const alertMessage = document.querySelector('.alert-messages');

export function alertMessages(text,seconds) {
alertMessage.innerText = `${text}`;

setTimeout(() => {
alertMessage.innerText = `Status`;
if(text === 'Item Deleted') {
    location.reload();
}
},seconds);

}