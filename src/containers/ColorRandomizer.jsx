import React, { Component } from 'react';
import Display from '../components/colorDisplay/colorDisplay.jsx';

class ColorRandomizer extends Component {
    state = {
      color: '#000000'
    };

    setColor = () => {
      const randomColor = 
        Math.floor(Math.random() * 16777215).toString(16);
      console.log(randomColor);
      const randomColorString = '#' + randomColor;
      return randomColorString;
    }

    handleColorChange = () => {
      setInterval(this.setState({ color: this.setColor }), 1000);
    }

    render() {
      return (
        <>
          <Display
            color={this.state.color}
            onChange={this.handleColorChange}
          />
        </>
      );
    }
}

export default ColorRandomizer;
