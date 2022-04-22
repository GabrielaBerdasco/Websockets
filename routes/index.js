const express = require('express');
const { Router } = express
const { getProducts } = require('../controllers/container')

const routerProducts = Router()

routerProducts.get('/', (req, res) => {
    let products = getProducts()
    res.render('main', { products: products })
})

module.exports = routerProducts