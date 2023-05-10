const AuthorController = require("../controllers/authors.controller");

module.exports = app => {
    app.post('/api/authors/create', AuthorController.createNewAuthor);
    app.get('/api/authors/find/all', AuthorController.findAllAuthors);
    app.get('/api/authors/find/:id', AuthorController.findOneAuthor);
    // Patch only changes values in the req.body
    app.patch('/api/authors/update/:id', AuthorController.updateAuthor); 
    app.delete('/api/authors/delete/:id', AuthorController.deleteAuthor);
}
