import React, { Component } from 'react';
import Display from '../components/color-display';

class ColorRandomizer extends Component {
    state = {
      color: '#000000'
    };

    const setColor = () => {
        const randomizeColor = 
        Math.floor(Math.random()*16777215).toString(16);
        const randomColorString = '#' + randomizeColor;
    }

    



    render() {
      return (
        <>
          <Display></Display>
        </>
      );
    }


}

export default ColorRandomizer;
