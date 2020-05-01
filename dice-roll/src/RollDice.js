import React, {Component} from 'react';
import Die from './Die';

class RollDice extends Component{
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    };

    constructor(props){
        super(props);
        this.state = {
            die1: 'one',
            die2: 'four'
        }
        this.roll = this.roll.bind(this);
    }

    getRandomSide = () => {
        console.log(this.props);
        return this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
    }

    roll(){
        //pick 2 new rolls
        const newDie1 = this.getRandomSide();
        const newDie2 = this.getRandomSide();
        //set state with new rolls
        this.setState({
            die1: newDie1,
            die2: newDie2
        });
    }

    render(){
        return (
            <div>
                <Die face={this.state.die1} />
                <Die face={this.state.die2} />
                <button onClick={this.roll}>Roll Dice</button>
            </div>
        )
    }
}

export default RollDice;