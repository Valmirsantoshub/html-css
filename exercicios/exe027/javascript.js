document.getElementById(message-form).addEventListener('submit', function(event)
{
    event.preventDefault();

    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value;

    if (messageText.trim()) {
        addMessage(messageText);
        messageInput.value = "";
        messageInput.focus();
    }
});

function addMessage(message) {
    const messageContainer = document.getElementById('messages');
    const messageElement = document.createElement('div');

    messageElement.textContent = message;
    messageContainer.appendChild(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight;
}