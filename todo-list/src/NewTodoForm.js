import React, {Component} from 'react';
import {v4 as uuid} from 'uuid';

export default class NewBoxForm extends Component {
    constructor(props){
        super(props);
        this.state = { task: '' }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.createTodo(this.state);
        this.setState({
            task: ""
        });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="task">New Todo: </label>
                <input 
                    type="text" 
                    name="task" 
                    placeholder="New Todo"
                    value={this.state.task} 
                    onChange={this.handleChange}
                    id="task"
                />
                <button>Add Todo</button>
            </form>
        )
    }
}