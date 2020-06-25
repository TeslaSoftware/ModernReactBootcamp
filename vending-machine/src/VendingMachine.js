import React, {Component} from 'react';
import Message from "./Message";
import { Link } from 'react-router-dom';
import "./VendingMachine.css";
import vendingMachineImg from "./VendingMachine.png";

export default class VendingMachine extends Component {
  render() {
    return (
      <div
        className='VendingMachine'
        style={{ backgroundImage: `url(${vendingMachineImg})` }}
      >
        <Message>
          <h1>hello i am a vending machine. what would you like to eat?</h1>
        </Message>
        <Message>
          <h1>
            <Link to="/soda" exact>Soda</Link>
          </h1>
          <h1>
            <Link to="/chips" exact>Chips</Link>
          </h1>
          <h1>
            <Link to="/sardines" exact>Sardines</Link>
          </h1>
        </Message>
      </div>
    );
  }
}