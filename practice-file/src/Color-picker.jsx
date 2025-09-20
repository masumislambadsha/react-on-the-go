import React, { useState } from 'react';

const ColorPicker = () => {

  const [color, setColor] = useState('white')

  return (
    <div>
      <div style={{
        height:'100px',
        width:'100px',
        backgroundColor: color
      }}>
        <h3>{color.toUpperCase()}</h3>
      </div>
      <button onClick={() => setColor('red')}>Red</button>
      <button  onClick={() => setColor('green')}>Green</button>
      <button  onClick={() => setColor('blue')}>Blue</button>
      <button  onClick={() => setColor('yellow')}>Yellow</button>
      <button  onClick={() => setColor('pink')}>Pink</button>
    </div>
  );
};

export default ColorPicker;
