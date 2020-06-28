import React, { Component } from 'react';
import "./CatList.css";

class CatList extends Component {
    render() {
        return (
            <div className="CatList">
                <h1 className="display1 text-center">Cat List!</h1>
                <div className="container">
                    <div className="row">
                        {this.props.cats.map(cat => (
                            <div className="Cat col-lg-4 text-center" key={cat.name}>
                                <img src={cat.src} alt={`cat ${cat.name}`} />
                                <h3>{cat.name}</h3>
                            </div>
                        ))}
                       
                    </div>
                </div>
            </div>
        )
    }
}

export default CatList;