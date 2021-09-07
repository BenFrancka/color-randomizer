import React, { Component } from 'react';
import Display from '../components/color-display';

class ColorRandomizer extends Component {
    state = {
      color: '#000000'
    };

    setColor = () => {
      const randomColor = 
        Math.floor(Math.random() * 16777215).toString(16);
      const randomColorString = '#' + randomColor;
      return randomColorString;
    }

    handleColorChange = (event) => {
      setInterval(this.setState({ [event.target.style]: this.setColor }), 1000);
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
