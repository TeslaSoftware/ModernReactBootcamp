/* eslint-disable jsx-a11y/anchor-is-valid */
import React  from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';
import CatDetails from './CatDetails';
import CatList from './CatList';
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
    const getCat = props => {
      let name = props.match.params.name;
      let currentCat = this.props.cats.find(
        cat => cat.name.toLowerCase() === name.toLowerCase()
      );
      return <CatDetails {...props} cat={ currentCat } />
    }

    return (
      <div>
        <Navbar cats={this.props.cats} />
        <Switch>
          <Route exact path='/cats' render={() => <CatList cats={this.props.cats} /> } />
          <Route path='/cats/:name' render={getCat} />
        </Switch>
      </div>
      
    );
  }
  
}

export default App;
