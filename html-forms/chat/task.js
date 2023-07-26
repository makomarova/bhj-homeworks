const chatWidget = document.querySelector('.chat-widget');
chatWidget.addEventListener('click', () => chatWidget.classList.add('chat-widget_active'));

const chatMessages = document.getElementById('chat-widget__messages');
const messageInput = document.getElementById('chat-widget__input');

messageInput.addEventListener('keyup', event => {
    if ((event.code === 'Enter') && (messageInput.value !== '')) {
        let time = new Date;
        chatMessages.innerHTML += `<div class="message message_client">
            <div class="message__time">${ time.getHours() }:${ time.getMinutes() }</div>
            <div class="message__text">${ messageInput.value }</div>
            </div>`;
        messageInput.value = '';
        let botMessages = ['Добрый день, до свидания', 'Кто тут?', 'Где ваша совесть?', 'К сожалению, все операторы заняты. Не пишите нам.', 'Мы ничего не будем вам продавать!'];
        const botMessage = botMessages[Math.floor(Math.random() * botMessages.length)];
        chatMessages.innerHTML += `<div class="message">
            <div class="message__time">${ time.getHours() }:${ time.getMinutes() }</div>
            <div class="message__text"> ${botMessage}</div>
            </div>`;
    }
});