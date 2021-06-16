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

const todoModel = function(){
    this.todos = [];
    
    this.addTodo = function(todoDescription) {
        this.todos = this.todos.concat(new todoItem(todoDescription, false));
    }

    this.getTodo = function(todoIndex) { return this.todos[todoIndex]; }
    
    this.getAllTodos = function() { return this.todos; }

    this.removeTodo = function(todoIndex) {
        this.todos = this.todos.filter((item, idx) => idx !== todoIndex);
    }

    this.toggleTodo = function(todoIndex) {
        const newTodo = new todoItem(this.getTodo(todoIndex).getDescription(), !this.getTodo(todoIndex).completed)
        this.todos = Object.assign([...this.todos], {
            [todoIndex]: newTodo
        });
    }
}

const todoItem = function(description, completed){
    this.description = description;
    this.completed = completed;

    this.setCompleted = function(value){ this.completed = value; }
    this.getDescription = function() { return this.description; }
    this.getCompleted = function() { return this.getCompleted; }
}

module.exports = {
    todoModel,
    todoController,
    todoItem,
}