import React, { Component } from 'react'
class Sprite extends Component {

    render() {
        return (
            <div style={
                {
                    display: "inline-block",
                    backgroundImage: `url(${this.props.properties.character})`,
                    width: `32px`,
                    height: `47px`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: `-${this.props.properties.x}px -${this.props.properties.y}px`
                }
            }>

            </div>
        )
    }
}
export default Sprite;
