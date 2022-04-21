const products = [
    {
        id: "1",
        image: "https://dl.dropboxusercontent.com/s/ig08109teihkjv1/YerberaNegra.jpeg?dl=0",
        name: "Yerbera negra", 
        description: "Yerbera con pico vertedor grande, flores fondo negro.", 
        price: 1116, 
        stock: 2, 
        category: "2"
    },
    {
        id: "2", 
        image: "https://dl.dropboxusercontent.com/s/rg3e81ppjrag2du/WhatsApp%20Image%202021-12-23%20at%2012.42.29.jpeg?dl=0",
        name: "Escurridor", 
        description: "Escurridor de cubiertos, cepillos o pinceles.", 
        price: 552, 
        stock: 7, 
        category: "1"
    },
    {
        id: "3", 
        image: "https://dl.dropboxusercontent.com/s/ektd5b6ie2nyfnr/MateShine.jpeg?dl=0",
        name: "Mate shine", 
        description: "Mate shine glitter con asa, bombilla y sistema de vaciado.", 
        price: 506, 
        stock: 5, 
        category: "1"
    },
    {
        id: "4", 
        image: "https://dl.dropboxusercontent.com/s/cs8y8w1766s6ool/YerberaRosa.jpeg?dl=0",
        name: "Yerbera rosa", 
        description: "Yerbera con pico vertedor grande, modelo flores rosa.", 
        price: 1116, 
        stock: 12, 
        category: "2"
    },
    {
        id: "5", 
        image: "https://dl.dropboxusercontent.com/s/e0u8zmcztr2zjqq/SetYyA.jpeg?dl=0",
        name: "Set yerbera y azucarera", 
        description: "Set yerbera y azucarera de hojalata, modelo terrazo.", 
        price: 1182, 
        stock: 15, 
        category: "2"
    }    
]

function getProducts() {
    return products
}

function saveProduct(product) {
    let lastIndex = products.length - 1
    let lastId = products[lastIndex].id
    let newId = parseInt(lastId) + 1
    const newProduct = { ...product, id: newId.toString() }
    products.push(newProduct)
    return products
}

module.exports = { getProducts, saveProduct }