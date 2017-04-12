'use strict';
const todosController = require('../controllers/controller').todos;
const todoItemsController = require('../controllers/controller').todoItems;

module.exports = (app) => {
  app.get('/rest', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/rest/todos/create', todosController.create);
  app.get('/rest/todos/list', todosController.list);

  app.post('/rest/todos/:todoId/items', todoItemsController.create);
  app.get('/rest/todos/:todoId', todosController.retreive);
  app.put('/rest/todos/:todoId', todosController.update);
  app.delete('/rest/todos/:todoId', todosController.deleteTodo);
};
