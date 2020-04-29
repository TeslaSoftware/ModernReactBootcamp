import React, {Component} from 'react';
import './Pokecard.css';

//This API supports only IDs that have exactly 3 digits. Function padToThree adds leading zeros that are missing
const POKE_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;

let padToThree = (number) => ( number <= 999 ? `00${number}`.slice(-3) : number)

class Pokecard extends Component {
    render(){
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <img src={imgSrc} alt={this.props.name} />
                <div className="Pokecard-data"> Type: {this.props.type}</div>
                <div className="Pokecard-data">EXP: {this.props.exp} </div>
            </div>
        );
    }
}

export default Pokecard;

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png

//this api requires padding of leading zeros to 3 digits e.g. 1 => 001, but has nicer assets
//https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png