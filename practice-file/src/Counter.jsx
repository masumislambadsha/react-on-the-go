import React, { useState } from 'react';



const Counter = () => {
  const [number, setNumber] = useState(0)

function increase() {

  const newCount = number + 1
  setNumber(newCount)
}
function decrease() {

  const newCount = number - 1
  setNumber(newCount)
}
  return (
    <div>
      <h3>Number is {number} </h3>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default Counter;
