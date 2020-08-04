import React from 'react';
import './ColorBox.css';
import ColorBox from './ColorBox';

export default class SingleColorPalette extends React.Component {
    constructor(props) {
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);

    }
  
    //returns all shades of given color
    gatherShades(palette, colorToFilterBy){
        let shades = [];
        let allColors = palette.colors;
        for(let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }

        //slice to remove color with lightness 50
        return shades.slice(1);
    }

    

    render() {

        const colorBoxes = this._shades.map(color => (
            <ColorBox key={color.id} name={color.name} background={color.hex} showingAllColors={false} showLink={false}/>
        ));

        return(
           <div className="Palette">
                <h1>Single color palette!!!</h1>
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
           </div>
        )
    }
}
