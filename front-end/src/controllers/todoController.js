const axios = require('axios')


const todoController = function(todoModel) {
    this.model = todoModel;

    this.loadTodosFromDatabase = async() => {
        try{
            await axios.get("http://localhost:4000/todos/").then(res => {
                let that = this;
                res.data.forEach(x => {
                    console.log(x); 
                    that.model.addTodo(x.description, x.completed)
                });
    
                console.log(this.model.getAllTodos());
            })
        }
        catch(err) { console.log(err) }
    }

    this.updateDatabase = function() {

    }

    this.requestAllTodos = function() {
        return this.model.getAllTodos();
    }

    this.requestTodo = function(todoIndex) {
        return this.model.getTodo(todoIndex);
    }

    this.requestAddTodo = function(todoDescription, completed = false) {
        this.model.addTodo(todoDescription, completed);

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