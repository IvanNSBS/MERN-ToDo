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

    this.updateCompleted = function(todoIndex, newCompleted) {
        const newTodo = new todoItem(this.getTodo(todoIndex).getDescription(), newCompleted)
        this.todos = Object.assign([...this.todos], {
            [todoIndex]: newTodo
        });
    }

    this.updateDescription = function(todoIndex, newDescription) {
        const newTodo = new todoItem(newDescription, this.getTodo(todoIndex).getCompleted())
        this.todos = Object.assign([...this.todos], {
            [todoIndex]: newTodo
        });
    }
}

const todoItem = function(description, completed){
    this.description = description;
    this.completed = completed;

    this.getDescription = function() { return this.description; }
    this.getCompleted = function() { return this.completed; }
}

module.exports = {
    todoModel,
    todoItem,
}