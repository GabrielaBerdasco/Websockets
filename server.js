const express = require('express');
const routerProducts = require('./routes/index.js')
const { saveProduct, getProducts } = require('./controllers/container.js')

const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');

const app = express();
const httpServer = new HttpServer(app);
const ioServer = new IOServer(httpServer);

const handlebars = require('express-handlebars');


app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        defaultLayout: 'index.hbs',
        layoutsDir: __dirname + '/public/views/layouts',
        partialsDir: __dirname + '/public/views/partials'
    })        
)
    
app.set('view engine', 'hbs');

app.set("views", "./public/views")

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/', routerProducts)
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.render('main');
})


const PORT = 8080

httpServer.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})

const dataMessages = [
    {
        author: 'Jose', 
        text: 'Hola',
        date: "Wed Apr 20 2022 18:22:41 GMT-0300 (hora estándar de Argentina)"
    }, 
    {
        author: 'Nico', 
        text: 'Hola',
        date: "Wed Apr 20 2022 18:22:41 GMT-0300 (hora estándar de Argentina)"
    }, 
    {
        author: 'Ignacio', 
        text: 'Hola',
        date: "Wed Apr 20 2022 18:22:41 GMT-0300 (hora estándar de Argentina)"
    }
]

const saludos = "hola mundo"

ioServer.on('connection', (socket) => {
    console.log('Nueva conexión')

    socket.emit('messages', dataMessages);
    socket.on('new-message', (data) => {
        dataMessages.push(data)
        ioServer.sockets.emit('messages', dataMessages)
    });
    
    /* socket.emit('greetings', saludos)
    socket.on('new-greeting', (saludo) => {
        saludos = saludo
        ioServer.sockets.emit('greetings', saludos)
    }); */
    /* socket.on('greetings', (data) => {
        saludos = data
        ioServer.sockets.emit('greetings', saludos)
    }); */

    socket.emit('products', getProducts());
    socket.on('new-product', (product) => {
        saveProduct(product)
        console.log("productos");
        ioServer.sockets.emit('products', getProducts())
    });

})