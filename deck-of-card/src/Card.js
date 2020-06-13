import React, {Component} from 'react';
import './Card.css';

export default class Card extends Component{

    constructor(props){
        super(props);
        const angle = parseFloat(Math.random() * 90 -45).toFixed(2);
        const xPos = parseFloat(Math.random() *40 -20).toFixed(2);
        const yPos = parseFloat(Math.random() *40 -20).toFixed(2);
        this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`
    }

    
    render(){
        
        return(
            <img 
                style={{transform: this._transform}}
                className="Card" 
                src={this.props.image} 
                alt={this.props.name} 
            />
        )
    }
}