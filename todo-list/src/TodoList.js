import React, {Component} from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = { todos: [{task: "walk the fish"}, {task: "groom chicken"}] }
    }

    render(){
        const todos = this.state.todos.map(todo => {
            return( <Todo task={todo.task} />);
        })
        return(
            <div>
               <h1>Todo List</h1>
               <ui>
                   {todos}
               </ui>
            </div>
        )
    }
}