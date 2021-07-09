import './App.css';
import React, {useState, useReducer, useEffect} from 'react';

const initialState = 0;

function reducer(state, action){
  switch(action.type){
    case "top":
      return state + 1;
    case "down":
      return state - 1;
    default:
      throw new Error("Error");
  }
}

function App() {
  const [counter, setCounter] = useState(0);
   const [state, dispatch] = useReducer(reducer, -10);
  return (
    <div className="App">
      <div>
        Another value: {state}
        <button onClick={() => dispatch({type: "top"})}>Up</button>
        <button onClick={() => dispatch({type: "down"})}>Down</button>
      </div>
    
    
    </div>
  );
}

export default App;
