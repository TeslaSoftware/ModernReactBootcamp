import React from 'react';

export default class ColorBox extends React.Component {
    render() {
        return(
            <div style={{
                background: this.props.background
            }} className="ColorBox">
                <span>{this.props.name}</span>
                <span>MORE</span>               
            </div>
        )
    }
}
