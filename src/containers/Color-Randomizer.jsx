import React, { Component } from 'react';
import Display from '../components/color-display';

class ColorRandomizer extends Component {
    state = {
      color: '#000000'
    };

    render() {
      return (
        <>
          <Display></Display>
        </>
      );
    }


}

export default ColorRandomizer;
