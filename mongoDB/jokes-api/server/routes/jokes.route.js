const JokeController = require("../models/jokes.model");

module.exports = app => {
    app.get('/api/jokes/find/all', JokeController.findAllJokes);
    app.get('/api/jokes/find/:id', JokeController.findOneJoke);
    app.patch('/api/jokes/update/:id', JokeController.updateJoke);
    app.post('/api/jokes/create', JokeController.createNewJoke);
    app.delete('/api/jokes/delete/:id', JokeController.deleteJoke);
}
