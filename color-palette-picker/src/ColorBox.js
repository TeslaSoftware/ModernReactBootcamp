import React from 'react';
import './ColorBox.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default class ColorBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = { copied: false };
        this.changeCopyState = this.changeCopyState.bind(this);
    }

    changeCopyState(){
        this.setState({copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1500);
        })
    }

    render() {
        const {name, background} = this.props;
        return(
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className="ColorBox">
                    <div style={{ background }} className={`copy-overlay ${this.state.copied ? 'show' : ''}`}></div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span>{name}</span>
                        </div>
                        <button className="copy-button">COPY</button>
                    </div>  
                    <span className="see-more">More</span>       
                </div>
            </CopyToClipboard>
        )
    }
}
