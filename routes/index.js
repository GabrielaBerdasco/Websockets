const express = require('express');
const { Router } = express
const { getProducts, saveProduct } = require('../controllers/container')

const routerProducts = Router()

routerProducts.get('/', (req, res) => {
    let products = getProducts()
    res.render('main', { products: products })
})

module.exports = routerProducts