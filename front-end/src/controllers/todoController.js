const todoController = function(todoModel) {
    this.model = todoModel;

    this.loadTodosFromDatabase = function() {

    }

    this.updateDatabase = function() {

    }

    this.requestAllTodos = function() {
        return this.model.getAllTodos();
    }

    this.requestTodo = function(todoIndex) {
        return this.model.getTodo(todoIndex);
    }

    this.requestAddTodo = function(todoDescription) {
        this.model.addTodo(todoDescription);

        return this.model.getAllTodos();
    }

    this.requestRemoveTodo = function(todoIndex) {
        this.model.removeTodo(todoIndex);

        return this.model.getAllTodos();
    }

    this.requestToggleTodo = function(todoIndex) {
        this.model.toggleTodo(todoIndex);

        return this.model.getAllTodos();
    }
}

module.exports = {
    todoController,
}