const db = require('../models');

module.exports = app => {
  // GET route for getting all of the todos
  app.get('/api/todos', (req, res) => {
    db.Todo.findAll({}).then(dbTodo => res.json(dbTodo));
  });

  // POST route for saving a new todo
  app.post('/api/todos', (req, res) => {
    const { text, complete, email } = req.body;

    db.Todo.create({
      text,
      complete,
      email
    }).then(dbTodo => res.json(dbTodo)).catch(err => res.json(err));
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  app.delete('/api/todos/:id', (req, res) => {
    const { id } = req.params;

    db.Todo.destroy({
      where: { id }
    }).then(dbTodo => res.json(dbTodo));
  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put('/api/todos', (req, res) => {
    const { text, complete, id } = req.body;

    db.Todo.update({ text, complete }, { where: { id } }).then(dbTodo => res.json(dbTodo));
  });
};
