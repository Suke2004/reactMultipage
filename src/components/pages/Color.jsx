import React, {useState} from "react";
import './Color.css';

export const Color = () => {

  const [color, setColor] = useState("#FFFFFF");

  function handleColorChange(event){
    setColor(event.target.value);
  }

  return ( <div className="color-picker-container">
               <h1>Capture Every Shade!!</h1>
               <div className="color-display" >
                   <h2>Selected Color: {color} </h2>
               </div>
               <div className="color-pickup">Choose a Color:
               <input type="color" value={color} onChange={handleColorChange}/>
               <h3>! Unleash Your Creativity !</h3>
               </div>
            </div>    
  );
  
}