import React, { Component } from 'react';
import Display from '../components/colorDisplay/colorDisplay.jsx';

class ColorRandomizer extends Component {
    state = {
      lastColor: '',
      color: 'red'
    };

    generateRandomColorHex() {
      const randomHex = () => Math.floor(Math.random() * 256).toString(16);

      return `#${randomHex()}${randomHex()}${randomHex()}`.padEnd(7, '0');
    }

    handleColorChange = () => {
      const newColor = this.generateRandomColorHex();

      this.setState(({ color }) => ({
        lastColor: color,
        color: newColor
      }));
    }

    componentDidMount() {
      setInterval(this.handleColorChange.bind(this), 1000);
    }

    render() {
      return (
        <>
          <Display
            lastColor={this.state.lastColor}
            color={this.state.color}
          />
        </>
      );
    }
}

export default ColorRandomizer;
