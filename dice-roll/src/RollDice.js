import React, {Component} from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component{
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    };

    constructor(props){
        super(props);
        this.state = {
            die1: 'one',
            die2: 'four',
            isRolling: false
        }
        this.roll = this.roll.bind(this);
    }

    getRandomSide = () => {
        return this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
    }

    roll(){
        //pick 2 new rolls
        const newDie1 = this.getRandomSide();
        const newDie2 = this.getRandomSide();
        //set state with new rolls
        this.setState({
            die1: newDie1,
            die2: newDie2,
            isRolling: true
        });
        //wait one second and set isRolling to false
        setTimeout(() => {
            this.setState({
                isRolling: false
            })
        },1000)
    }

    render(){
        return (
            <div className="RollDice">
                <div className="RollDive-container">
                    <Die face={this.state.die1} isRolling={this.state.isRolling} />
                    <Die face={this.state.die2} isRolling={this.state.isRolling}/>
                </div>
                <button onClick={this.roll} disabled={this.state.isRolling}>
                    {this.state.isRolling ?'Rolling...' : "Roll Dice" }
                </button>
            </div>
        )
    }
}

export default RollDice;