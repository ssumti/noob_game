import React, { Component } from 'react'
import Sprite from './Sprite'
import c1 from './image/c1.png'

class Player extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="player" id="player">
                <Sprite properties={
                    {
                        x: this.props.xx * 32,
                        y: this.props.yy * 47,
                        character: c1,
                    }
                } />
            </div>
        )
    }

}
export default Player;