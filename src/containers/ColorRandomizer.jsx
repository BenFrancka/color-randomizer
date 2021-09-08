import React, { Component } from 'react';
import Display from '../components/colorDisplay/colorDisplay.jsx';

class ColorRandomizer extends Component {
    state = {
      lastColor: '',
      color: 'red'
    };

    generateRandomColorHex() {
      //generates a random hex 
      const randomHex = () => Math.floor(Math.random() * 256).toString(16);

      
      /*Adds # and calls randomHex 3x for variety Limits character length to 7*/
      return `#${randomHex()}${randomHex()}${randomHex()}`.padEnd(7, '0');
    }

    //sets state to randomly generated color
    handleColorChange = () => {
      const newColor = this.generateRandomColorHex();

      this.setState(({ color }) => ({
        lastColor: color,
        color: newColor
      }));
    }

    //sets color state to random with bind method within an 1 sec setInterval. 
    componentDidMount() {
      setInterval(this.handleColorChange.bind(this), 1000);
    }

    //Display will render the newly generated state from line 30 once a second.
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
