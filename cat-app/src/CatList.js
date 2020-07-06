import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./CatList.css";

class CatList extends Component {
    render() {
        return (
            <div className="CatList">
                <h1 className="display1 text-center my-4">Cat List!</h1>
                <div className="row">
                    {this.props.cats.map(cat => (
                        <div className="Cat col-lg-4 text-center" key={cat.name}>
                            <Link to={`/cats/${cat.name}`}>
                                <img src={cat.src} alt={`cat ${cat.name}`} />
                                <h3 className="underline mt-3" >
                                    {cat.name}
                                </h3>   
                            </Link>                         
                        </div>
                    ))}                       
                </div>
            </div>
        )
    }
}

export default CatList;