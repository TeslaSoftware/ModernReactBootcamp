import React, {Component} from 'react';


export default class Box extends Component {
    constructor(props){
        super(props)
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(){
        this.props.removeTodo(this.props.todoId);
    }

    render(){
        return(
            <div>
                <button>Edit</button>
                <button onClick={this.handleRemove}>X</button>
                <li>{this.props.task}</li>
            </div>
        )
    }
}