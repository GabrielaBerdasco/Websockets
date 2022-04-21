const socket = io.connect()

function render(data) {
    const html = data.map((elem, index) => {
        return (`
            <li class="chat-item">
                <strong class="text-primary">${elem.author}</strong>
                <span class="text-danger">[${Date()}]: </span>
                <em class="text-success">${elem.text}</em>
            </li>
        `)
    }).join('')
    console.log(html)
    document.getElementById('messages').innerHTML = html
}

function addMessage(e) {
    /* e.preventDefault() */
    const message = {
        author: document.getElementById('userEmail').value,
        text: document.getElementById('textMessage').value
    }
    console.log(message);
    socket.emit('new-message', message)
    return false
}

socket.on('messages', (dataMessages) => {
    render(dataMessages)
})