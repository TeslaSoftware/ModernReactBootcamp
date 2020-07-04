import React  from 'react';
import Navbar from './Navbar';
import './App.css';
import Routes from './Routes';

import Coby from './Images/Coby.jpg';
import Frisby from './Images/Frisby.jpg';
import Luna from './Images/Luna.jpg';

class App extends React.Component {
  
  static defaultProps = {
    cats: [
      {
        name: "Coby",
        age: 5,
        src: Coby,
        facts: [
          "Coby loves eating popcorn.",
          "Coby is a terrible guard cat.",
          "Coby wants to cuddle with you!"
        ]
      },
      {
        name: "Frisby",
        age: 3,
        src: Frisby,
        facts: [
          "Frisby has soooo much energy!",
          "Frisby is highly intelligent.",
          "Frisby loves people more than cats."
        ]
      },
      {
        name: "Luna",
        age: 4,
        src: Luna,
        facts: [
          "Luna is not the brightest cat",
          "Luna does not like walks or exercise.",
          "Luna loves eating food."
        ]
      }
    ]
  };

  render(){

    return (
      <div>
        <Navbar cats={this.props.cats} />
        <div className="container">
          <Routes cats={this.props.cats}/>
        </div>
      </div>      
    );
  }
  
}

export default App;
