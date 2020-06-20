import React, {Component} from 'react';
import axios from 'axios';
import {v4 as uuid} from "uuid";
import Joke from './Joke';
import './JokeList.css';

export default class JokeList extends Component{
    static defaultProps = { numJokesToGet: 10};

    constructor(props){
        super(props);
        this.state = { jokes: JSON.parse(window.localStorage.getItem("jokes")) || [] };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        //Load jokes if state is empty (if nothing was found in local storage)
        if(this.state.jokes.length === 0){
            this.getJokes();
        }        
    }

    handleClick(){
        this.setState({ loading: true}, this.getJokes);
    }

    async getJokes(){
        let jokes = [];
        while(jokes.length < this.props.numJokesToGet){ 
            const res = await axios.get('https://icanhazdadjoke.com/', {
                headers: {
                    Accept: "application/json"
                }
            });
            jokes.push({
                text: res.data.joke, 
                votes: 0,
                id: uuid()
            });
        }
        this.setState(oldState => { 
            return {
                jokes : [...oldState.jokes, ...jokes ],
                loading: false
            }
        },
        () => window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
        );
    }

    handleVote(id, delta){
        this.setState(oldState => ({
            jokes: oldState.jokes.map(joke => {
                return joke.id === id ? {...joke, votes: joke.votes + delta}: joke
            })
        }),
        () => window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
        );
    }

    render(){
        if(this.state.loading){
            return (
                <div className="JokeList-spinner">
                    <i className="fas fa-8x fa-laugh fa-spin"/>
                    <h1>Loading...</h1>
                </div>
            )
        }

        return(
            <div className="JokeList">
                <div className="JokeList-sidebar">
                    <h1 className="JokeList-title"><span>Dad</span> Jokes</h1>
                    <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' alt="Laughing emoji" />
                    <button onClick={this.handleClick} className="JokeList-getmore">New Jokes</button>
                </div>                
                <div className="JokeList-jokes">
                    {this.state.jokes.map(j => {
                        return (
                            <Joke 
                                votes={j.votes} 
                                text={j.text}
                                key={j.id}
                                upvote={() => this.handleVote(j.id, 1)}
                                downvote={() => this.handleVote(j.id, -1)}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}