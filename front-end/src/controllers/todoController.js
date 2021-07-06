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

    this.requestUpdateCompleted = function(todoIndex, newValue) {
        this.model.updateCompleted(todoIndex, newValue);

        return this.model.getAllTodos();
    }

    this.requestUpdateDescription = function(todoIndex, newValue) {
        this.model.updateDescription(todoIndex, newValue);

        return this.model.getAllTodos();
    }
}

module.exports = {
    todoController,
}