const socket = io.connect()

function render(data) {
    const html = data.map((elem, index) => {
        return (`
            <li class="chat-item">
                <strong class="text-primary">${elem.author}</strong>
                <span class="text-danger">[${elem.date}]: </span>
                <em class="text-success">${elem.text}</em>
            </li>
        `)
    }).join('')
    console.log(html)
    document.getElementById('messages').innerHTML = html
}

function addMessage(e) {
    const date = Date()
    const message = {
        author: document.getElementById('userEmail').value,
        text: document.getElementById('textMessage').value,
        date: date
    }
    console.log(message);
    socket.emit('new-message', message)

    document.getElementById('textMessage').value = ''   
    return false
}

/* const template = Handlebars.compile(`
    {{#each products}}
        <tr>
            <td>{{name}}</td>
            <td>{{price}}</td>
            <td><img src="{{image}}" alt="{{name}}" width="100"></td>
        </tr>
    {{/each}}
`) */

/* function renderProducts(data) {
    const html = data.map((elem, index) => {
        return (`
            <tr>
                <td>${elem.name}</td>
                <td>${elem.price}</td>
                <td><img src="${elem.image}" alt="${elem.name}" width="100"></td>
            </tr>
        `)
    }).append('')
    console.log(html)
    document.getElementById('products').innerHTML = html
} */

/* function addProduct(e) {
    const product = {
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
        image: document.getElementById('image').value
    }
    console.log(product);
    socket.emit('new-product', product)

    document.getElementById('name').value = ''
    document.getElementById('price').value = ''
    document.getElementById('image').value = ''

    return false
} */

/* function addGreeting(e) {
    const greeting = document.getElementById('greeting').value
    console.log(greeting);
    socket.emit('new-greeting', greeting)

    document.getElementById('greeting').value = ''

    return false
}

socket.on('greetings', (saludos) => {
    console.log(saludos)
    document.getElementById('greetings').innerHTML = saludos
}) */

/* socket.on('products', (data) => {
    document.getElementById('products').innerHTML = template({productos: data})
})*/

socket.on('messages', (dataMessages) => {
    render(dataMessages)
})