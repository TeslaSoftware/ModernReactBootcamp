import React, {Component} from 'react';
import axios from 'axios';
import Card from './Card';
import './Deck.css';
const API_BASE_URL = "https://deckofcardsapi.com/api/deck/";

export default class Deck extends Component{
    constructor(props){
        super(props);
        this.state = {
            deck: null,
            drawn: []
        }
        this.getCard = this.getCard.bind(this);
    }

    async componentDidMount(){
        let deck = await axios.get(`${API_BASE_URL}new/shuffle`);
        this.setState({
            deck: deck.data
        })
    }

    async getCard(){
        //make request using deck id
        const id = this.state.deck.deck_id;
        try{
            const cardURL = `${API_BASE_URL}/${id}/draw/`
            const cardRes = await axios.get(cardURL);
            if(!cardRes.data.success){
                throw new Error("No card remaining!")
            }
            //set state using new card info from API
            
            const card = cardRes.data.cards[0];
            this.setState(oldState => ({
                drawn: [
                    ...oldState.drawn,
                    { 
                        id: card.code, 
                        image: card.image,
                        name: `${card.value} of ${card.suit}`
                    }
                ]
            }));
        }
        catch (err){
            alert(err);
        }        
    }

    render(){
        const cards = this.state.drawn.map(card =>(
            <Card key={card.id} name={card.name} image={card.image} />
        ));
        return(
            <div>
                <h1 className="Deck-title">♦Card Dealer♦</h1>
                <h2 className="Deck-title subtitle">♦A little demo made with React♦</h2>
                <button className="Deck-btn" onClick={this.getCard}>Get Card!</button>
                <div className="Deck-cardarea">
                    {cards}
                </div>                
            </div>

        )
    }

}