const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/check-auth')
const ProductController = require('../controllers/products')

router.get('/', ProductController.products_get_all)

router.post('/',  checkAuth, ProductController.products_create_product)

router.get('/:productId',  checkAuth,  async function(req, res, next) {
    const  uniqueCode = req.query.productId;
    if (uniqueCode) {
        ProductController.product_get_product_query
     } else if (uniqueCode) {
        ProductController.product_get_product
     }
})

router.patch('/:productId', checkAuth,  ProductController.products_update_product)

router.delete('/:productId',  checkAuth, ProductController.products_delete_product)

module.exports = router