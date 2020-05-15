import React, {Component} from 'react';
import Box from './Box';


export default class BoxList extends Component {
    constructor(props){
        super(props);
        this.state = { boxes: [{width: 10, height: 40, color: 'orange'}] }
    }
    render(){
        const boxes = this.state.boxes.map(box => (
            <Box 
                height={box.height}
                width={box.width}
                color={box.color}
            />
        ))
        return(
            <div>
               <h1>Color Box Maker Thingy</h1>
               {boxes}
            </div>
        )
    }
}