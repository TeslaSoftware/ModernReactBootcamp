import React from 'react';
import {NavLink, Link} from 'react-router-dom';

class Navbar extends React.Component{
    render(){
        const catLinks = this.props.cats.map(cat => (
            <li className="nav-item" key={cat.name}>
                <NavLink exact to={`/cats/${cat.name}`} className="nav-link" >
                    {cat.name}
                </NavLink>
            </li>
        ))

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <Link className="navbar-brand" to="/cats"> Cat App!</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item" key="home">
                            <NavLink exact to="/cats" className="nav-link">Home</NavLink>
                        </li>
                        {catLinks}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;