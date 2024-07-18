import React, { useState } from 'react';
import './App.css';  

const App = () => {
  const [matrix, setMatrix] = useState(Array(9).fill(null));  
  const [clicks, setClicks] = useState([]);  
 
  const handleClick = (index) => {
    if (index === 8) {  
      setMatrix((prevMatrix) => {
        return prevMatrix.map((color, i) => {
          return clicks.includes(i) ? 'orange' : color;
        });
      });
      setClicks([]); 
    } else {
      setMatrix((prevMatrix) => {
        const newMatrix = [...prevMatrix];
        newMatrix[index] = 'green';
        return newMatrix;
      });
      setClicks((prevClicks) => [...prevClicks, index]);
    }
  };

  return (
    <div className="matrix">
      {matrix.map((color, index) => (
        <div
          key={index}
          className="box"
          style={{ backgroundColor: color }}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default App;
