import React,{ useState } from "react";
import './Counter.css';

 export const Counter = () =>{

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    }

    const decrement = () => {
        setCount(count-1);
    }

    const reset = () => {
        setCount(0);
    }

    return( 
            <div className="counter-container">
               <p className="count-dispaly">{count}</p>
               <button className="counter-button" onClick={increment}><h1>Increment</h1></button>
               <button className="counter-button" onClick={decrement}><h1>Decrement</h1></button>
               <button className="counter-button" onClick={reset}><h1>Reset</h1></button>
            </div>
        )
 }
