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
    todoItem,
}