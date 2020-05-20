import React, {Component} from 'react';


export default class Box extends Component {
    render(){
        return(
            <div>
                <button>Edit</button>
                <button>X</button>
                <li>{this.props.task}</li>
            </div>
        )
    }
}