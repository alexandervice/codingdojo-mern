const ProductController = require("../controllers/products.controller");

module.exports = app => {
    app.get('/api/products/find/all', ProductController.findAllProducts);
    app.get('/api/products/find/:id', ProductController.findOneProduct);
    app.patch('/api/products/update/:id', ProductController.updateProduct);
    app.post('/api/products/create', ProductController.createNewProduct);
    app.delete('/api/products/delete/:id', ProductController.deleteProduct);
}
