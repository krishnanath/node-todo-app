var Todos = require('../models/todoModel');

module.exports = function(app) {
    app.get('/api/setupTodos', function(req,res){
        var starterTodos = [
            {
                username:'test',
                todo: 'leranig',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'Todd',
                todo:'Runing',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'tets',
                todo: 'Learn Node',
                isDone: false,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos, function(err, results){
            res.send(results);
        });

    });
}
