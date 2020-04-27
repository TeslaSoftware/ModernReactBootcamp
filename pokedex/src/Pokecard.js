import React, {Component} from 'react';
import './Pokecard.css';

const POKE_API = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;

class Pokecard extends Component {
    render(){
        let imgSrc = `${POKE_API}${this.props.id}.png`;
        return (
            <div className="Pokecard">
                <h1>{this.props.name}</h1>
                <img src={imgSrc}alt={this.props.name} />
                <div> Type: {this.props.type}</div>
                <div>EXP: {this.props.exp} </div>
            </div>
        );
    }
}

export default Pokecard;

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png

//this api requires padding of leading zeros to 3 digits e.g. 1 => 001, but has nicer assets
//https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png